import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import './style.css';
import { useState } from "react";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleNav =()=>{
    setOpenSidebar(!openSidebar);
  }
  return (
    <div className="dashb">
      <div className="navbar">
        <NavBar handleNav={handleNav} />
      </div>
      <main>
        <div className="sidebar-cont">
          <SideBar openSidebar={openSidebar} handleNav={handleNav} />
        </div>
        <div className="table">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
