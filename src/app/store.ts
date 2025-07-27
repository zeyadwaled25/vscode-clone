import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { fileTreeSlice } from './features/fileTreeSlice';

export const store = configureStore({
  reducer: {
    fileTree: fileTreeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;