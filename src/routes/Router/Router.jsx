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
import Dashboard from "../../layout/Dashboard/Dashboard";
import InputResortData from "../../pages/InputResortData/InputResortData";
import ResortPage from "../../components/ResortPage/ResortPage";
import SingleResortPage from "../../components/SingleResortPage/SingleResortPage";
import Region from "../../components/Region/Region";
import MyAccount from "../../pages/MyAccount/MyAccount";
import MyHistory from "../../components/MyHistory/MyHistory";
import AvailableUnit from "../../components/AvailableUnit/AvailableUnit";
import CheckoutPage from "../../components/CheckoutPage/CheckoutPage"
import Payment from "../../components/Payment/Payment";
import SearchPage from "../../components/SearchPage/SearchPage";
import Confirmation from "../../components/Confirmation/Confirmation";
import AdminPanel from "../../layout/AdminPanel/AdminPanel";
import AdminOverview from "../../pages/AdminOverview/AdminOverview";
import UsersBookings from "../../pages/UsersBookings/UsersBookings";
import UserControl from "../../pages/UserControl/UserControl";
import AdminControl from "../../pages/AdminControl/AdminControl";
import Profile from "../../pages/Profile/Profile";
import MyBookings from "../../components/MyBookings/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "resort-directory", element: <ResortDirectory /> },
      { path: "login", element: <Login /> },
      { path: "create-profile", element: <CreateProfile /> },
      { path: "input-resort-data", element: <InputResortData /> },
      { path: "resort-page/:id", element: <ResortPage /> },
      { path: "single-resort-page/:id", element: <SingleResortPage /> },
      { path: "region/:id", element: <Region /> },
      { path: "/available-unit", element: <AvailableUnit/> },
      { path: "/checkout", element: <CheckoutPage/> },
      { path: "/payment", element: <Payment/>},
      { path: "confirmation", element: <Confirmation/>},
      { path: "search", element: <SearchPage/>},
      { path: "/profile", element: <Profile/> },
      
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
      { path: "my-history", element: <MyHistory/> },
      { path: "my-bookings", element: <MyBookings/> },
      
    ],
  },
  {
    path: "admin-panel",
    element: <AdminPanel />,
    children: [
      {
        path: "admin-overview",
        element: <AdminOverview />,
      },
      {
        path: "users-bookings",
        element: <UsersBookings />,
      },
      {
        path: "user-control",
        element: <UserControl />,
      },
      {
        path: "admin-control",
        element: <AdminControl />,
      }
    ]
  }
]);
