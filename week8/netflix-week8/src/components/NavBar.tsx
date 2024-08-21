import { ReactElement, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NetflixContext from "../context/NetflixContext";

export default function NavBar():ReactElement{
    const context=useContext(NetflixContext)
    const navigate=useNavigate()
    function searchHandler(){
        alert("search clicked") 
    }
    return(
        <div className="flex items-center justify-evenly w-full h-10 pt-10">
            <img src="netflixlogo.svg" className="h-40 w-40" onClick={()=>navigate('/home')} />
            <Link to='/home'>
                <p className="text-sm text-gray-400">Home</p>
            </Link>
            <Link to='/home'>
                <p className="text-sm text-gray-400">Tv Shows</p>
            </Link>
            <Link to='/home'>
                <p className="text-sm text-gray-400">Movies</p>
            </Link>
            <Link to='/home'>
                <p className="text-sm text-gray-400">Recently Added</p>
            </Link>
            {/* if time add this dont forget */}
            <Link to='/list'>
                <p className="text-sm text-gray-400">My list</p>
            </Link>
            <img src="search.png" className="h-6 w-6" onClick={searchHandler} />
            <div className="flex items-center justify-center">
                <img src={context.user?.photoURL ?? "user.png"} className="h-6 w-6"/>
                <img src="downarrow.png" className="h-6 w-6" onClick={()=>navigate('/profile')} />
            </div>
        </div>
    )
}