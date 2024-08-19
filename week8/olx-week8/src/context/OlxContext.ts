import { createContext, Dispatch, SetStateAction } from 'react'

interface contextProps{
    logindialog:boolean,
    setLogindialog:Dispatch<SetStateAction<boolean>>
}
const OlxContext = createContext<contextProps | null >(null)

export default OlxContext
