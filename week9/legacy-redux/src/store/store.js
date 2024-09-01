import { createStore } from "redux";

function counterReducer(state={value:0},action){
    if(action.type==='INCREMENT'){
        // let count=state.value++
        return {value:state.value+1}
    }else{
        return state
    }
}


const store=createStore(counterReducer)

export default store