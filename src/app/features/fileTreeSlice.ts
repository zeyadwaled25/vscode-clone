import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile, IOpenedFile } from "../../interfaces";

const initialState: IOpenedFile = {
  openedFile: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  }
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFile: (state, action: PayloadAction<IFile[]>) => {
      state.openedFile = action.payload;
    }
  },
})

export const { setOpenedFile } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;