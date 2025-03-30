import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
    isAuthenticated: Cookies.get('isAuthenticated') ? JSON.parse(Cookies.get('isAuthenticated')) : false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;

            Cookies.set('user', JSON.stringify(action.payload), { expires: 1 });
            Cookies.set('isAuthenticated', JSON.stringify(true), { expires: 1 });
        },
        clearAuth: (state) => {
            state.user = null;
            state.isAuthenticated = false;

            Cookies.remove('user');
            Cookies.remove('isAuthenticated');
        }
    }
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
