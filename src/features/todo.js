import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState:{value:[]},
    reducers:{
       addTodo: (state, action)=>{
        state.value.push(action.payload)
       },
       deleteTodo: (state,action)=>{
        let id = action.payload;
        const newState = state.value.filter((eachTodo)=> eachTodo.id!==id);
        state.value = [...newState]
       },
       editNote:(state,action)=>{
        let id = action.payload.id;
        let updatedNote = action.payload.updatednote;
        const newState = state.value.map((eachTodo)=>{
            if(eachTodo.id===id){
                return {task:eachTodo.task,note:updatedNote,id:eachTodo.id}
            }
            return eachTodo;
        })
        state.value = [...newState]
       }
    }
})

export const {addTodo,deleteTodo,editNote} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;