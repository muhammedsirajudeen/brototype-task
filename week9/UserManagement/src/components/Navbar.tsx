import { ReactElement } from "react";
import { Outlet } from "react-router";

export default function Navbar():ReactElement{
    return(
        <>
            <nav className="h-16 w-screen flex items-center justify-start bg-navbar ">
                <img src="icon.png"/> 
            </nav>
            <Outlet/>
        </>
    )
}