/*
Temperatures.js - ESP3D WebUI component file

 Copyright (c) 2021 Luc LEBOSSE. All rights reserved.

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

import { Fragment, h } from "preact";
import { T } from "../Translations";
import { useUiContext } from "../../contexts";
import { ButtonImg } from "../Controls";
import { useHttpFn } from "../../hooks";
import { espHttpURL } from "../Helpers";
import { Thermometer } from "preact-feather";
import {
  iconsTarget,
  useTargetContextFn,
  useTargetContext,
} from "../../targets";

/*
 * Local const
 *
 */
/*
 * Local const
 *
 */
//A separate control to avoid the full panel to be updated when the temperatures are updated
const TemperaturesControls = () => {
  const { temperatures } = useTargetContext();
  return (
    <div class="temperatures-ctrls">
      {Object.keys(temperatures).map((tool) => {
        if (temperatures[tool].length == 0) return;
        return (
          <Fragment>
            {temperatures[tool].map((temp, index) => {
              return (
                <div class="temperatures-ctrl mt-1">
                  <div class="temperatures-header">
                    {tool}
                    {temperatures[tool].length > 1 ? index : ""}
                  </div>
                  <div class="temperatures-value">{temp.current}</div>
                  {temp.target > 0 && (
                    <div class=" temperatures-target">{temp.target}</div>
                  )}
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
};

const TemperaturesPanel = () => {
  const { panels, uisettings } = useUiContext();
  const { processData } = useTargetContextFn;
  const { createNewRequest } = useHttpFn;
  const id = "temperaturesPanel";
  console.log(id);
  const sendCommand = (cmd) => {
    createNewRequest(
      espHttpURL("command", { cmd }).toString(),
      { method: "GET", echo: cmd },
      {
        onSuccess: (result) => {
          processData("response", result);
        },
        onFail: (error) => {
          console.log(error);
          processData("error", error);
        },
      }
    );
  };

  //const macroList = uisettings.getValue("macros");

  return (
    <div className="column col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-3 mb-2">
      <div class="panel mb-2 panel-dashboard">
        <div class="navbar">
          <span class="navbar-section feather-icon-container">
            <Thermometer />
            <strong class="text-ellipsis">{T("P29")}</strong>
          </span>
          <span class="navbar-section">
            <span style="height: 100%;">
              <button
                class="btn btn-clear btn-close m-1"
                aria-label="Close"
                onclick={(e) => {
                  panels.hide(id);
                }}
              />
            </span>
          </span>
        </div>
        <div class="panel-body panel-body-dashboard">
          <TemperaturesControls />
        </div>
      </div>
    </div>
  );
};

const TemperaturesPanelElement = {
  id: "temperaturesPanel",
  content: <TemperaturesPanel />,
  name: "P29",
  icon: "Thermometer",
  show: "showtemperaturespanel",
  onstart: "opentemperaturesonstart",
};

export { TemperaturesPanel, TemperaturesPanelElement, TemperaturesControls };
