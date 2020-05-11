/*
 index.js - ESP3D WebUI dashboard file

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
import { T } from "../translations"
import { initApp } from "../uisettings"
import { Page } from "../app"
import { TerminalPanel, updateTerminal } from "./terminal"
const { JogPanel } = require(`../${process.env.TARGET_ENV}`)
import { preferences } from "../uisettings"

/*
 * Dashboard page
 *
 */
const DashboardPage = ({ currentState }) => {
    if (currentState.activePage != Page.dashboard) return null
    return (
        <div>
            <TerminalPanel currentState={currentState} />
            <center>
                <div class="controlSpacer" />
                <div class="card">
                    <div class="card-body">
                        <JogPanel preferences={preferences.settings} />
                    </div>
                </div>
            </center>
        </div>
    )
}

export { DashboardPage, updateTerminal }
