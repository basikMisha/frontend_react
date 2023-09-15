import { createSlice } from "@reduxjs/toolkit"
import { IAuthState } from "../../../common/types/auth";
import { getPublicUser, loginUser, registerUser } from "../../thunks/auth";

const initialState: IAuthState = {
    user: [],
    isLogged: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login(state, action) {
        //     state.user = action.payload
        //     state.isLogged = true
        //     console.log('Action ', action.payload);
        //     console.log('User from state ', state.user);
        //     console.log('Logged ', state.isLogged);
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
            state.isLogged = false
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })

        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true
            state.isLogged = false
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(getPublicUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
});

// export const {login} = authSlice.actions;
export default authSlice.reducer