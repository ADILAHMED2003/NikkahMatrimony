import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
    name: "notify",
    initialState: {
        message: "",
        visible: false,
        type: "info", 
    },
    reducers: {
        showNotify: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type || "info";
            state.visible = true;
        },
        hideNotify: (state) => {
            state.message = "";
            state.visible = false;
            state.type = "info";
        },
    },
});

export const { showNotify, hideNotify } = notifySlice.actions;
export default notifySlice.reducer;
