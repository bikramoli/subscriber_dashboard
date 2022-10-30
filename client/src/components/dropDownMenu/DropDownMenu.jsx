import { useState } from "react";
import "./Style.css";

const DropDownMenu = ({ title, options, handleCheckBoxFilters }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <form>
      <div className="multi-select">
        <div className="selectBox" onClick={() => setIsMenuOpen((s) => !s)}>
          <div className="select">
            <p>{title}</p>
            {isMenuOpen ? ">" : "^"}
          </div>
        </div>
        {isMenuOpen && (
          <div id="checkboxes">
            {options.map((item, index) => (
              <label key={index} for="one">
                <input
                  type="checkbox"
                  id="one"
                  name={item.name}
                  onChange={handleCheckBoxFilters}
                />
                {item.title}
              </label>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};
export default DropDownMenu;
