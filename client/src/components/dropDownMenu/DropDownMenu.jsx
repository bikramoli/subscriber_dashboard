import { useState } from "react";
import "./Style.css";

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  let expanded = false;

  const showBoxes = (e) => {
    e.preventDefault();
    if (!expanded) {
      setOpen(true);
      expanded = true;
    } else {
      setOpen(false);
      expanded = false;
    }
  };

  return (
    <form>
      <div className="multi-select">
        <div className="selectBox" onClick={showBoxes}>
          <select>
            <option>Select an Option</option>
          </select>
          <div className="overSelect"></div>
        </div>
        <div id="checkboxes" style={{ display: open ? "block" : "none" }}>
          <label for="one">
            <input type="checkbox" id="one" />
            One
          </label>
          <br />
          <label for="two">
            <input type="checkbox" id="two" />
            Two
          </label>
          <br />
          <label for="three">
            <input type="checkbox" id="three" />
            Three
          </label>
        </div>
      </div>
    </form>
  );
};
export default DropDownMenu;
