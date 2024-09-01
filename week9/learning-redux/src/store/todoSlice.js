import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";

function getPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello world")
        },3000)
    })
}

export const examplethunk=createAsyncThunk('example',async ()=>{
    let data=await getPromise()
    return data
})

const todoSlice=createSlice(
    {
        name:"todo",
        initialState:{
            todo:[]
        },
        reducers:{
            addTodo:(state,action)=>{
                state.todo.push(action.payload)
            },
            removeTodo:(state,action)=>{
                state.todo.splice(state.todo.indexOf(action.payload),1)
            },
        },
        extraReducers:(builder)=>{
            builder.addCase(examplethunk.fulfilled,(state,action)=>{
                state.todo.push(action.payload)
            })
        }
        
        
    }
)

export const countReducer=createReducer({value:0},
    (builder)=>{
        builder.addCase('increment',(state)=>{state.value++})
    }
)
//action creators
export const {addTodo,removeTodo}=todoSlice.actions


export default todoSlice.reducer