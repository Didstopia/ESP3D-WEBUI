/*
 icon.js - ESP3D WebUI images file

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

import { h } from "preact";

/*
 *fan icon
 * default height is 1.2m
 */
const Fan = ({ height = "1.2em" }) => (
  <svg height={height} viewBox="-4 1 38 30">
    <g>
      <path
        fill="currentColor"
        d="M 25,1.73 C 24.9,1.7 24.6,1.54 24.2,1.42 22,0.56 19.6,0.98 18,2.51 c -0.4,0.45 -1.5,2.06 -1.6,2.83 -0.6,1.67 -0.8,3.5 -0.6,5.16 0.1,0.4 0.1,0.5 0,0.5 -0.6,0 -1.5,0.3 -2.2,0.6 -0.2,0 -0.2,0 -0.6,-0.2 C 12.3,10.7 11.8,9.87 11.4,8.58 11.3,8.24 11.1,7.3 11,6.49 10.8,5.53 10.6,4.96 10.5,4.64 9.97,3.43 8.48,2.57 7.13,2.6 5.48,2.66 3.47,4.15 2.24,6.19 1.86,6.84 1.38,7.97 1.23,8.54 0.96,9.67 1.01,11.1 1.36,12.1 c 0.22,0.6 0.76,1.5 1.21,2 0.46,0.4 2.18,1.4 2.88,1.6 1.74,0.6 3.49,0.8 5.05,0.6 0.3,-0.1 0.5,-0.1 0.5,-0.1 0,0.7 0.2,1.6 0.5,2.1 0.1,0.2 0.1,0.3 0,0.5 -0.2,0.3 -0.7,0.8 -1,1.1 -0.93,0.6 -1.82,0.9 -3.95,1.2 -0.96,0.2 -1.52,0.4 -1.81,0.5 -0.83,0.4 -1.53,1.2 -1.85,2 -0.43,1.4 -0.22,2.4 0.71,3.8 1.3,1.9 3.78,3.4 5.97,3.6 1.63,0.2 3.13,-0.3 4.33,-1.4 0.4,-0.3 0.5,-0.5 1,-1.4 0.5,-0.7 0.6,-1.1 0.8,-1.5 0.6,-1.7 0.8,-3.5 0.5,-5.1 0,-0.3 0,-0.5 0,-0.5 0,0 0.3,-0.1 0.6,-0.1 0.6,-0.1 1.1,-0.2 1.5,-0.5 0.3,-0.1 0.4,0 0.9,0.4 1,0.9 1.4,2 1.9,4.7 0.2,0.9 0.3,1.5 0.5,1.8 0.5,1.2 2,2.1 3.3,2 1.7,0 3.8,-1.5 5,-3.5 1.1,-2 1.5,-4.1 0.8,-5.9 -0.2,-0.5 -0.7,-1.5 -1.1,-1.9 -0.5,-0.4 -1.9,-1.3 -2.6,-1.6 -1.7,-0.7 -3.8,-0.9 -5.5,-0.7 -0.2,0.1 -0.4,0.1 -0.4,0.1 -0.1,-0.6 -0.3,-1.6 -0.5,-2.1 -0.2,-0.3 -0.2,-0.4 0.3,-1 0.9,-0.9 2,-1.3 4.6,-1.8 1,-0.2 1.6,-0.4 1.8,-0.5 C 28.6,9.87 29.5,8.41 29.4,7.04 29.3,5.37 27.8,3.34 25.8,2.12 25.4,1.95 25.1,1.78 25,1.73 c 0,0 0,0 0,0 M 18.9,13.2 c 0.5,0.6 0.8,1.1 1,1.9 0.2,0.7 0.2,1.4 0,2.1 -0.7,2.5 -3.7,3.7 -6,2.4 -1.8,-1.2 -2.5,-3.7 -1.4,-5.6 0.6,-1 1.4,-1.6 2.6,-1.8 1.4,-0.4 2.8,0 3.8,1 0,0 0,0 0,0"
      />
      <path
        fill="currentColor"
        d="M 17.2,13.2 C 16.6,13 15.6,13 15,13.1 c -2.2,0.5 -2.9,4 -1.2,5.4 1.5,1.3 4.4,0.7 5.1,-1.1 0.4,-1.7 0.1,-2.9 -0.8,-3.7 -0.2,-0.2 -0.4,-0.3 -0.5,-0.3 0,0 -0.2,-0.2 -0.4,-0.2 0,0 0,0 0,0"
      />
    </g>
  </svg>
);

/*
 *bed icon
 * default height is 1.2em
 */
const Bed = ({ height = "1.2em" }) => (
  <svg height={height} viewBox="0 0 180 140">
    <g>
      <path
        style="fill:currentColor;stroke:#ffffff;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 7.59,115 c 49.61,0 99.41,0 148.41,0 10,1 10,17 1,19 -50,0 -99.6,0 -149.41,0 -11.05,0 -10.88,-19 0,-19 0,0 0,0 0,0"
      />
      <path
        style="fill:none;stroke:currentColor;stroke-width:12;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="M 40.4,4.85 C 49.4,17.9 56.2,35 50.7,50.9 46.6,63.4 38.2,76 42,89.7 c 1.3,5.1 3.6,9.9 6.8,14.3"
      />
      <path
        style="fill:none;stroke:currentColor;stroke-width:12;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="M 75.5,4.85 C 85,17.7 91.3,35 85.8,50.9 82.1,63.5 73.7,76 77.6,89.7 78.4,95 81,99.8 84.5,104"
      />
      <path
        style="fill:none;stroke:currentColor;stroke-width:12;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 111,4.7 c 5,8.2 10,17.2 11,27.1 2,7.7 0,15.7 -3,22.7 -4,10.9 -9,22.8 -6,34.8 1,6 3,10 7,14.7"
      />
    </g>
  </svg>
);

/*
 *feedrate icon
 * default height is 1.2m
 */
const FeedRate = ({ height = "1.2em" }) => (
  <svg height={height} viewBox="-10 4 112 90">
    <path
      style="stroke:currentColor;stroke-width:12;fill:none"
      d="M84.78 48.08C84.88 62.28 74.58 75.08 61.48 79.78C46.08 85.78 26.88 81.68 16.38 68.48C7.98 58.58 6.58 43.48 13.18 32.28C20.38 18.98 36.08 11.58 50.98 13.24"
    />
    <path
      style="stroke:currentColor;stroke-width:12;fill:none"
      d="M59.18 14.76C64.38 16.38 69.28 18.88 73.48 22.38"
    />
    <path
      style="stroke:currentColor;stroke-width:12;fill:none"
      d="M79.18 27.48C82.08 31.38 84.08 35.98 84.88 40.78"
    />
    <path
      style="stroke:currentColor;fill:currentColor"
      d="M37.58 45.28C45.28 41.38 52.98 37.58 60.68 33.68C57.68 41.48 54.68 49.38 51.68 57.18C46.98 53.18 42.28 49.28 37.58 45.28C37.58 45.28 37.58 45.28 37.58 45.28"
    />
  </svg>
);

/*
 *flowrate icon
 * default height is 1.2m
 */
const FlowRate = ({ height = "1.0em" }) => (
  <svg height={height} viewBox="1 21 90 59">
    <path
      d="m 47.2,42.3 0.2,-25 m 8.8,35.1 a 9.12,9.13 0 0 1 -9.1,9.1 9.12,9.13 0 0 1 -9.1,-9.1 9.12,9.13 0 0 1 9.1,-9.1 9.12,9.13 0 0 1 9.1,9.1 z m 13.7,0.7 A 22.8,22.8 0 0 1 47.1,75.9 22.8,22.8 0 0 1 24.3,53.1 22.8,22.8 0 0 1 47.1,30.3 22.8,22.8 0 0 1 69.9,53.1 Z M 47.2,29.9 A 22.8,22.8 0 0 0 25.8,44.5 H 4.66 c -0.74,0 -1.35,0.6 -1.35,1.3 v 13 c 0,0.8 0.61,1.6 1.35,1.6 H 25.5 A 22.8,22.8 0 0 0 47.2,75.5 22.8,22.8 0 0 0 68.6,60.4 h 19.1 c 0.8,0 1.3,-0.8 1.3,-1.6 v -13 c 0,-0.7 -0.5,-1.3 -1.3,-1.3 H 68.4 A 22.8,22.8 0 0 0 47.2,29.9 Z"
      style="fill:none;stroke:currentColor;stroke-width:7.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
    />
  </svg>
);

/*
 *extruder icon
 * default height is 1.2m
 */
const Extruder = ({ height = "1.2em" }) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M 5.5108428,3.1993803 V 13.849862 L 11.945,19.584736 18.379157,13.849862 V 3.1993803 A 1.6085393,1.6385356 0 0 0 16.770618,1.5608447 H 7.1193821 A 1.6085393,1.6385356 0 0 0 5.5108428,3.1993803 Z" />
    <line
      x1="1.606562"
      y1="1.6350005"
      x2="22.44639"
      y2="1.6350005"
      stroke-width="2.5"
    />
    <line
      x1="1.6400856"
      y1="12.15"
      x2="22.479914"
      y2="12.15"
      stroke-width="2.5"
    />
    <line
      x1="1.6400858"
      y1="6.6600003"
      x2="22.479914"
      y2="6.6600003"
      stroke-width="2.5"
    />
    <path
      stroke-width="1.5"
      d="m 7.834995,23.334736 c 2.36,-0.05001 4.72,-0.18315 7.08,-0.15
    1.43359,0.01514 1.410545,-1.79139 0.015,-1.845 -1.384258,-0.02633
    -3.023158,0.08337 -3.054895,-1.634712 0,-0.130916 -0.0134,0.05834
    -0.0201,-0.810288"
    />
  </svg>
);
const iconsTarget = {
  Fan: <Fan />,
  Bed: <Bed />,
  FeedRate: <FeedRate />,
  FlowRate: <FlowRate />,
  Extruder: <Extruder />,
};

export { Fan, Bed, FeedRate, FlowRate, Extruder, iconsTarget };
