import { sideBarItem } from "./SideBarItem";
import "./Style.css";

const SideBar = () => {
  return (
    <div>
      {/* sidebar-header */}
      <div className="sidebar-header">
        <h3 className="brand">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-grid-1x2-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" />
            </svg>
          </span>
          <span>DASHBOARD</span>
        </h3>
        <label for="sidebar-toggle" style={{ cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </label>
      </div>

      {/* sidebar-menu */}
      <div className="sidebar-menu">
        <ul>
          {sideBarItem.map((item, index) => (
            <li key={index}>
              <a href="/">
                <span>
                  <img
                    src={item.items[0].icon}
                    alt="Dashboard_icon"
                    style={{ color: "white" }}
                  />
                </span>
                <span>{item.items[0].name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
