import { createSlice} from '@reduxjs/toolkit';
import { UserData } from '../FakeData/FakeData';

export const userSlice=createSlice({
    name:'users',
    initialState:{value:UserData},
    reducers:{
        addUser:(state,action)=>{
        // write code for adding user
        state.value.push(action.payload)
        },
        deleteUser:(state,action)=>{
        // write code for delete user
            state.value=state.value.filter((user)=>user.id!==action.payload.id)
        },
        updateUser:(state,action)=>{
        // write code for update user
            state.value.map((user)=>{
            if(user.id===action.payload.id){
            user.userName=action.payload.userName;
            }
        })
        }
    }
})

export default userSlice.reducer;
export const {addUser,deleteUser,updateUser}=userSlice.actions;

