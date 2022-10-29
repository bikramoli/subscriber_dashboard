import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import "./Style.css";
const MainLayout = () => {
  return (
    <>
      <div className="sidebar">
        <SideBar />
      </div>
      <div class="main-content">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
