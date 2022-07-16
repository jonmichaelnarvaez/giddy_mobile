import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
    profileImage:"",
    firstName:"",
    lastName:"",
    userName:"",
    dob:"",
    gender:"",
    state:"",
    phone:"",
    error:null,
    loading: false,
    
    },
    reducers: {
    }
});

export const {
    name,
    firstName,
    lastName,
    profileImage,
    userName,
    dob,
    gender,
    state,
    phone,
    error,
    loading,
} = userSlice.actions;

export default userSlice.reducer;

