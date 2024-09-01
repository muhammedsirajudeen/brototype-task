import React from "react";
import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Home from "./pages/User/Home";
import Profile from "./pages/User/Profile";
import Dashboard from "./pages/Admin/Dashboard";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { useAppDispatch } from "./store/hooks";
import { setAuthenticated, setUser } from "./store/globalSlice";
import { tokenVerifier } from "./helper/tokenVerifier";
import ErrorElement from "./Error/ErrorElement";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement:<ErrorElement/>,
    children: [
      {
        index: true,
        element: <Login />,
        loader: tokenVerifier,
      },
      {
        path: "/signup",
        element: <Signup />,
        loader: tokenVerifier,
      },
      {
        path: "/home",
        element: <Home />,
        loader: tokenVerifier, // Use loader for asynchronous data fetching
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: tokenVerifier,
      },
      {
        path: "/admin",
        element: <Dashboard />,
        loader: tokenVerifier,
      },
    ],
  },
]);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const authState = async () => {
    const data = await tokenVerifier();
    if (data) {
      dispatch(setAuthenticated());
      dispatch(setUser(data));
    }
  };
  authState();
  return (
    // dont forget to include the fallback element
    <RouterProvider router={router} />
  );
};

export default App;
