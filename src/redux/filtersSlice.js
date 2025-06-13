import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "filter",
    initialState: { text: "" },
    reducers: {
        changeFilter: (state, action) => {
            state.text = action.payload;
        },
    },
});
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;