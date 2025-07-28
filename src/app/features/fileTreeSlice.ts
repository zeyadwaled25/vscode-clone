import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IClickedFile, IFile, IOpenedFile } from "../../interfaces";

const initialState: IOpenedFile = {
  activeTabId: null,
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setActiveTabId: (state, action: PayloadAction<string | null>) => {
      state.activeTabId = action.payload;
    },
  },
})

export const { setOpenedFiles, setClickedFile, setActiveTabId } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;