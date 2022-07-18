import AsyncStorage from "@react-native-async-storage/async-storage";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: null,
    error: "",
    loading: false,
    email: null,
}

export const signupUser = createAsyncThunk('signupUser', async(body) => {
    const result = await api("/sign-up", body);
    return result;
});

export const signinUser = createAsyncThunk('signinUser', async() => {
    const result = await api('/sign-in', body);
    return result;
});

export const addToken = createAsyncThunk('addToken', async() => {
    const result = await AsyncStorage.getItem('token');
    return result;
});


const authReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.token = null;
            AsyncStorage.removeItem('token')
        }
    },
    extraReducers: {
        [signupUser.fulfilled] : (state, {payload: {error, message}}) => {
            state.loading = false;
            if(error) {
                state.error = error
                alert(error)
            } else {
                state.error = message
                alert(message)
            }
        },
        [addToken.fulfilled]: (state, action) => {
            state.token = action.payload;
        },
        [signupUser.pending] : (state, action) => {
            state.loading = true;
        },
        [signinUser.pending] : (state, action) => {
            state.loading = true;
        },
        [signinUser.fulfilled] : (state, {payload: {error, token}}) => {
            state.loading = false;
            // if error is true the send an alert else set the users Token and
            // save to users device.
            if(error) {
                state.error = error
                alert(error)
            } else {
                state.token = token
                AsyncStorage.setItem('token', token)
            }
        }
    }
});

export const {logout} = authReducer.actions;
export default authReducer.reducer;