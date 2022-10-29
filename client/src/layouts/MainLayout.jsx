import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import "./Style.css";
const MainLayout = () => {
  return (
    <>
      <div className="sidebar">
        <SideBar />
      </div>
      <div class="main-content">
        <h1>Header</h1>
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
