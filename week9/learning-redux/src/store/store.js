import { configureStore } from "@reduxjs/toolkit";
import todoSlice, { countReducer } from "./todoSlice"
const middleware=()=>next=>action=>{
    console.log("before")
    next(action)
    console.log("after")
}
let store=configureStore(
    {
        
        reducer:{
            todo:todoSlice,
            count:countReducer
        },
        middleware:(getdefaultMiddleware)=>{
            return getdefaultMiddleware().concat(middleware)
        }
        
    }
)



export default store