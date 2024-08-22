import { ReactElement, useEffect, useState } from "react";
import { dataProps } from "../pages/Home/Home";
import { useNavigate } from "react-router-dom";

export default function MovieLister({url,title}:{title:string,url:string}):ReactElement{
    const [movies,setMovies]=useState<Array<dataProps>>([])
    const [loading,setLoading]=useState<boolean>(true)
    const navigate=useNavigate()
    useEffect(()=>{
        
        async function movieFetcher(){
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${import.meta.env.VITE_API_KEY_TMDB}`
                }
              }
            //   console.log("hey")
              const data=await (await fetch(url,options)).json()
              console.log(data.results)
              setMovies(data.results)
              setTimeout(()=>setLoading(false),1000)
            }
        movieFetcher()
        
    
    },[url])
    function watchHandler(movie:dataProps){
        navigate('/details',{state:{movie:movie}})
    }
    function favHandler(movie:dataProps){
        alert(movie.id)
    }
    return(
            <>

            <h1 className="text-3xl text-white font-bold mt-20 ml-10">{title}</h1>
            <div className="flex items-center justify-evenly  min-h-52   mt-10 movie-container overflow-y-hidden overflow-x-scroll">
            {
                movies.map((movie)=>{
                    if(loading){
                        return(
                            <div key={movie.id}  className="flex flex-col items-center justify-center">
                            <div className="h-60 min-w-48 skeleton-loader m-10 text-white bg-black">
                            </div>
                            <div className="h-3 mb-10 min-w-40 skeleton-loader mt-4 "></div>

                            </div>
                        )
                     }
                    else{
                        return(
                            <div key={movie.id} className="flex flex-col items-start justify-center m-10 ">
                            <img className="image"  src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}/>
                            <p className="font-light text-sm text-white ">Rating <span className="text-yellow-400 font-bold">{movie.vote_average}</span></p>
                            <p className="text-center text-xl text-white font-light h-10 overflow-hidden">{movie.title}</p>
                            <p className="text-xs text-white font-light w-52 h-20 overflow-hidden mt-2">{movie.overview}</p>
                            <div className="flex items-center justify-center">
                                <button className="flex bg-black p-1 font-bold mt-10 items-center justify-center" onClick={()=>watchHandler(movie)} >
                                    <img src="play.png" className="h-6 w-6"/>
                                    <p className="font-bold text-sm text-white">Play Now</p>
                                </button>
                                <button className="flex bg-white p-1  font-bold mt-10 items-center justify-center ml-3" onClick={()=>favHandler(movie)} >
                                    <img src="add.png" className="h-3 w-3"/>
                                    <p className="font-bold text-sm text-black">List</p>
                                </button>
                            </div>
                        </div>          
                                      )
                    }
                })
            }
        </div>

        </>
    )
}