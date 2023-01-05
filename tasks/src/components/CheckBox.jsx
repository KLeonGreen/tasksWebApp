import React from "react";

function CheckBox() {
  return (
    <div className="d-flex align-items-center m-0">
      <div class="checkbox">
        <input type="checkbox" class="check" id="check1" />
        <label for="check1" class="label">
          <svg viewBox="0 0 100 100" height="50" width="50">
            <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
            <g transform="translate(0,-952.36216)" id="layer1">
              <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" stroke-width="3" class="path1" />
            </g>
          </svg>
        </label>
      </div>
      <p>Task name goes here</p>
    </div>
  );
}

export default CheckBox;
