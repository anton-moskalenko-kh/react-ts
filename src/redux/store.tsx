import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {postsSlice} from "./slices/postsSlice";

export const store = configureStore({
    reducer: {
        usersSlice: usersSlice.reducer,
        postsSlice: postsSlice.reducer
    }
})

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

type AppSelector = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AppSelector>()