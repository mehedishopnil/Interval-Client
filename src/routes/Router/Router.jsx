import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import ResortDirectory from "../../pages/ResortDirectory/ResortDirectory";
import Login from "../../pages/Login/Login";
import CreateProfile from "../../pages/CreateProfile/CreateProfile";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main/>,
          children: [
               {
                    path: "/",
                    element: <Home/>,
               },
               {
                    path: "resort-directory",
                    element: <ResortDirectory/>
               },
               {
                    path: "login",
                    element: <Login/>
               },
               {
                    path: "create-profile",
                    element: <CreateProfile/>
               },
          ]
     }
])