import { ReactElement } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearAuthenticated, setUser } from "../store/globalSlice";
export default function Navbar(): ReactElement {
  const authenticated = useAppSelector((state) => state.global.authenticated);
  const user = useAppSelector((state) => state.global.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const signoutHandler = () => {
    window.localStorage.clear();
    dispatch(clearAuthenticated());
    dispatch(setUser({}))
    navigate("/");
  };
  return (
    <>
      <nav className="h-16 w-screen flex items-center justify-between bg-navbar ">
        <img src="icon.png" />
        {authenticated && (
          <a className="font-light text-white" href="/home">
            Home
          </a>
        )}
        {authenticated && (
          <a className="font-light text-white" href="/profile">
            <img
              src={user.profileImage ?? "user.png"}
              className="h-6 w-6 rounded-full"
            />
          </a>
        )}


        {user.authorization === "admin" ? (
          <a href="/admin" className="font-light text-white mr-5">Admin Dashboard</a>
        ) : authenticated  ? (
          <button
            onClick={signoutHandler}
            className="font-light text-white mr-5"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="font-light text-white mr-5"
          >
            Sign In
          </button>
        )}

        {
            location.pathname==="/admin"  &&
            <button onClick={signoutHandler} className="font-light text-white mr-5">Signout</button> 
        }
      </nav>
      <Outlet />
    </>
  );
}
