import { DocumentData } from 'firebase/firestore'
import { createContext, Dispatch, SetStateAction } from 'react'

interface contextProps{
    logindialog:boolean,
    setLogindialog:Dispatch<SetStateAction<boolean>>,
    authentication:boolean,
    setAuthentication:Dispatch<SetStateAction<boolean>>,
    username:string,
    setUsername:Dispatch<SetStateAction<string>>,
    profileimage:string,
    setProducts:Dispatch<SetStateAction<Array<DocumentData>>>,
    products:Array<DocumentData>
    // setProfileimage:Dispatch<SetStateAction<string>>
}
const OlxContext = createContext<contextProps | null >(null)

export default OlxContext
