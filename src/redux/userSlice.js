import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        id: 0,
        username: "",
        email: "",
        profilePic: ""
    },
    };

    export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.id = action.payload.id;
            state.value.name = action.payload.name;
            state.value.email = action.payload.email;
            state.value.profilePic = action.payload.profilePic;
        },
        logout: (state) => {
            state.value.id = 0;
            state.value.name = "";
            state.value.email = "";
            state.value.profilePic = "";
        },
    },
});

export const { login , logout} = userSlice.actions;

export default userSlice.reducer;