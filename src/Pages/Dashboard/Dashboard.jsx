import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return ( 
        <div className="dashb">
            <p>nav bar</p>
            <p>side bar</p>
            <p>main</p>
            <Outlet />
        </div>
     );
}
 
export default Dashboard;