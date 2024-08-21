import { ReactElement, useContext, useEffect } from "react";
import styles from "./Home.module.css"
import NetflixContext from "../../context/NetflixContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseHelper";
import NavBar from "../../components/NavBar";
import MovieLister from "../../components/MovieLister";
function urlCounter(number:number):string{
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${number}&sort_by=popularity.desc`;
    return url
}
export interface dataProps{
    adult:boolean,
    backdrop_path:string,
    genre_ids:Array<number>,
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:2122

}


export default function Home():ReactElement{
    const context=useContext(NetflixContext)
    console.log(context.user)
    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,async (user)=>{
            if(!user){
                navigate('/')
            }
          })
    },[navigate])
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(!user){
            navigate('/')
            // setUser(user)
            // setAuthentication(true)
            // setUsername(user.email??"")
            // setProfileimage(user.photoURL ?? "")
    
          }else{
            console.log("user not found")
          }
        })
      },[navigate])
    return(
        <div className={` ${styles.maincontainer} w-screen h-auto pb-10 `}>
            <NavBar/>
            <MovieLister title="Popular Movies" url={urlCounter(1)} />
            <MovieLister title="Trending Movies" url={urlCounter(2)} />
            <MovieLister title="Trending Movies" url={urlCounter(3)} />
            <MovieLister title="Trending Movies" url={urlCounter(4)} />
            <MovieLister title="Trending Movies" url={urlCounter(5)} />
            <MovieLister title="Trending Movies" url={urlCounter(6)} />


        </div>
    )
}

