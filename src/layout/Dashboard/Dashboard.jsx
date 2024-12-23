import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <DashboardNav />

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 p-4 mt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
