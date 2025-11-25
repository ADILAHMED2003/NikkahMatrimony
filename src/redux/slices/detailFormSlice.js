import { createSlice } from "@reduxjs/toolkit";
import ProfileCards from "../../Pages/Cards/ProfileCards";

const detailFormSlice = createSlice({
  name: "profile",
  initialState: {
    data: [],
  },
  reducers: {
    detailSlice: (state, action) => {
      state.data = action.payload;  
    },
    detailGetSlice: (state, action) => {
      state.data = action.payload;
    },

  },
});


export const { detailSlice, detailGetSlice } = detailFormSlice.actions;
export default detailFormSlice.reducer;
