import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Home from "./pages/User/Home";
import Profile from "./pages/User/Profile";
import url from "./helper/backendUrl";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { useAppDispatch } from "./store/hooks";
import { setAuthenticated, setUser } from "./store/globalSlice";
import Dashboard from "./pages/Admin/Dashboard";
import userProps from "./types/userProps";
export async function tokenVerifier(): Promise<userProps | null> {
  const token = window.localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(`${url}/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data?.message === "success") {
        return response.data.user as userProps;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Token verification failed", error);
      return null;
    }
  }
  return null;
}

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
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
