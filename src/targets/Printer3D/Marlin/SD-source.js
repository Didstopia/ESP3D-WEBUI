/*
 SD-source.js - ESP3D WebUI Target file

 Copyright (c) 2020 Luc Lebosse. All rights reserved.

 This code is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.

 This code is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public
 License along with This code; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
import { h } from "preact"
import { canProcessFile } from "../../helpers"
import {
    formatFileSizeToString,
    sortedFilesList,
    formatStatus,
    filterResultFiles,
} from "../../../components/Helpers"
import { useUiContextFn } from "../../../contexts"

//Extract information from string - specific to FW / source
const formatFileSerialLine = (acc, line) => {
    //possible format and corresponding regexp extract
    const regList = [
        {
            regex: "^(.*\\.GCODE)\\s([0-9]*)$",
            extract: (res) => {
                return { name: res[1], size: res[3] }
            },
        },
        {
            regex: "^(.*\\.GCODE)\\s([0-9]*)\\s(.*\\.GCODE)$",
            extract: (res) => {
                return { name: res[4], size: res[3] }
            },
        },
        {
            regex: "^(.*\\.GCODE)$",
            extract: (res) => {
                return { name: res[1], size: "" }
            },
        },
    ]
    //get extension list
    const extList = useUiContextFn.getValue("filesfilter")
    const filter =
        "(" +
        extList.split(";").reduce((acc, item) => {
            if (acc.length == 0) {
                acc = item.trim()
            } else {
                acc += "|" + item.trim()
            }
            return acc
        }, "") +
        ")"

    for (let i = 0; i < regList.length; i++) {
        let regFn
        try {
            regFn = regList[i].regex.replaceAll("GCODE", filter)
            //console.log("regex is :", regFn)
            const reg_ex = new RegExp(regFn, "ig")
            const result = reg_ex.exec(line)
            if (result) {
                //console.log(result)
                const extract = regList[i].extract(result)
                //console.log(regList[i].extract(result))
                acc.push({
                    name: extract.name,
                    size: formatFileSizeToString(extract.size),
                })
                return acc
            }
        } catch (e) {
            console.log("error in regex", regFn, e)
            return acc
        }
    }
    //nothing was found
    return acc
}

const capabilities = {
    Process: (path, filename) => {
        return canProcessFile(filename)
    },
    UseFilters: () => true,
    IsFlatFS: () => true,
    Upload: (path, filename, eMsg = false) => {
        if (eMsg) return "E1"
        //TODO
        //check 8.1 if become true
        return false
    },
    UploadMultiple: () => {
        return false
    },
    Download: () => {
        return false
    },
    DeleteFile: () => {
        return true
    },
    DeleteDir: () => {
        return false
    },
    CreateDir: () => {
        return false
    },
}

const commands = {
    list: (path, filename) => {
        return {
            type: "cmd",
            cmd: useUiContextFn.getValue("sdlistcmd").replace(";", "\n"),
        }
    },
    formatResult: (result) => {
        const res = {}
        const files = result.content.reduce((acc, line) => {
            return formatFileSerialLine(acc, line)
        }, [])
        res.files = sortedFilesList(files)
        res.status = formatStatus(result.status)
        return res
    },
    filterResult: (data, path) => {
        const res = {}
        res.files = sortedFilesList(filterResultFiles(data.files, path))
        res.status = formatStatus(data.status)
        return res
    },
    play: (path, filename) => {
        return {
            type: "cmd",
            cmd: "M23 " + path + (path == "/" ? "" : "/") + filename + "\nM24",
        }
    },
    delete: (path, filename) => {
        return {
            type: "cmd",
            cmd: "M30 " + path + (path == "/" ? "" : "/") + filename,
        }
    },
}

const responseSteps = {
    list: {
        start: (data) => data.startsWith("Begin file list"),
        end: (data) => data.startsWith("End file list"),
        error: (data) => {
            return (
                data.indexOf("error") != -1 ||
                data.indexOf("echo:No SD card") != -1 ||
                data.indexOf('echo:Unknown command: "M21"') != -1 ||
                data.indexOf('echo:Unknown command: "M20"') != -1
            )
        },
    },
    delete: {
        start: (data) => data.startsWith("File deleted"),
        end: (data) => data.startsWith("ok"),
        error: (data) => {
            return data.startsWith("Deletion failed")
        },
    },
}

const SD = { capabilities, commands, responseSteps }

export { SD }
