import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { createContext } from "react";
interface contextProps{
    // number:number,
    app:FirebaseApp | undefined,
    auth:Auth | undefined,

}

const NetflixContext=createContext<contextProps>(
    {
        
        app:undefined,
        auth:undefined
    }
)

export default NetflixContext
