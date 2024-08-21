import { ReactElement, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
// import YouTube from "react-youtube";
// import YouTube from 'react-youtube';
function idInjector(id:string):string{
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    return url
}
export default function Watch(): ReactElement {
    const location=useLocation()
    const [movieid,setMovieid]=useState<string>("")
    const [loading,setLoading]=useState<boolean>(true)
    useEffect(()=>{
        async function movieFetcher(){
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${import.meta.env.VITE_API_KEY_TMDB}`
                }
              }
              if(location.state.movie.id){
                const data=await (await fetch(idInjector(location.state.movie.id),options)).json()
                console.log(data.results)
                setMovieid("https://www.youtube.com/watch?v="+data.results[0].key)
                setLoading(false)
              }
            //   setMovies(data.results)
            //   setTimeout(()=>setLoading(false),1000)
            }
        movieFetcher()

    
    },[location.state.movie.id])
    return (
        <div className="h-screen w-screen flex-col bg-specialcolor">
        <NavBar/>
        <div className="flex items-center justify-center mt-10">
            {/* <YouTube videoId={movieid} height="1000" width="1000"  /> */}
        {loading ? 
            <div  className="skeleton-loader h-video w-video"></div>
         :
            <ReactPlayer
            className='react-player'
            url={movieid}
            width='100%'
            height='90vh'
            />
        } 

        </div>
        
        </div>
    );
}