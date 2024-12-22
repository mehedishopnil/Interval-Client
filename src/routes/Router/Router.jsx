import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import ResortDirectory from "../../pages/ResortDirectory/ResortDirectory";
import Login from "../../pages/Login/Login";
import CreateProfile from "../../pages/CreateProfile/CreateProfile";
import Gateways from "../../pages/Gateways/Gateways";
import Exchange from "../../pages/Exchange/Exchange";
import Membership from "../../pages/Membership/Membership";
import Cruises from "../../pages/Cruises/Cruises";
import AirTravel from "../../pages/AirTravel/AirTravel";
import CarRentals from "../../pages/CarRentals/CarRentals";
import MyAccount from "../../pages/MyAccount/MyAccount";
import Dashboard from "../../layout/Dashboard/Dashboard";

export const router = createBrowserRouter([
     {
         path: "/",
         element: <Main />,
         children: [
             { path: "/", element: <Home /> },
             { path: "resort-directory", element: <ResortDirectory /> },
             { path: "login", element: <Login /> },
             { path: "create-profile", element: <CreateProfile /> },
         ],
     },
     {
         path: "/dashboard",
         element: <Dashboard />,
         children: [
             { path: "gateways", element: <Gateways /> },
             { path: "exchange", element: <Exchange /> },
             { path: "membership", element: <Membership /> },
             { path: "cruises", element: <Cruises /> },
             { path: "air-travel", element: <AirTravel /> },
             { path: "car-rentals", element: <CarRentals /> },
             { path: "my-account", element: <MyAccount /> },
         ],
     },
 ]);
 