import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./slices/counterSlice";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>()

type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()