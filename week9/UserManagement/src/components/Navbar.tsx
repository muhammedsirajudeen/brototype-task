import { ReactElement } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearAuthenticated } from "../store/globalSlice";
export default function Navbar():ReactElement{
    const authenticated=useAppSelector((state)=>state.global.authenticated)
    const user=useAppSelector((state)=>state.global.user)
    const navigate=useNavigate()
    const dispatch=useAppDispatch()
    const signoutHandler=()=>{
        window.localStorage.clear()
        dispatch(clearAuthenticated())
        navigate('/')
    }
    return(
        <>
            <nav className="h-16 w-screen flex items-center justify-between bg-navbar ">
                <img src="icon.png"/> 
                {
                    authenticated && 
                    <a className="font-light text-white" href="/home">Home</a>
                }
                {
                    authenticated && 
                    <a className="font-light text-white" href="/profile">
                        <img src={user.profileImage ?? "user.png"} className="h-6 w-6 rounded-full" />
                    </a>
                }
                {authenticated
                 ?
                 <button onClick={signoutHandler} className="font-light text-white mr-2">Sign Out</button>
                 :
                 <button onClick={()=>navigate('/')}  className="font-light text-white mr-2">Sign In</button> 
                }
            </nav>
            <Outlet/>
        </>
    )
}