import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState:{
       value:{
        name: "",
        age: 0,
        password: "",
        login:false
       }
    },
    reducers:{
        login:(state, action)=>{
            state.value = action.payload
        },
        logout: (state) =>{
           state.value = {
            name: "",
            age: 0,
            password: "",
            login: false
           }
        }
    }
})
export const {login,logout} = userSlice.actions;
export const userReducer= userSlice.reducer;