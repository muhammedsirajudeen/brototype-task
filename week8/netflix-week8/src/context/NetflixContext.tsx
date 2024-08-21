import { FirebaseApp } from "firebase/app";
import { Auth, User } from "firebase/auth";
import { createContext } from "react";
interface contextProps{
    // number:number,
    app:FirebaseApp | undefined,
    auth:Auth | undefined,
    user:User | undefined

}

const NetflixContext=createContext<contextProps>(
    {
        
        app:undefined,
        auth:undefined,
        user:undefined
    }
)

export default NetflixContext
