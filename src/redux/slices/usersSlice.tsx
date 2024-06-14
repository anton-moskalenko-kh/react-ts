import {UserModel} from "../../models/UserModel";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/users.api.service";
import {AxiosError} from "axios";

type UsersSliceType = {
    users: UserModel[],
    user: UserModel | null,
    isLoaded: boolean,
}

const initialState: UsersSliceType = {
    users: [],
    user: null,
    isLoaded: false,
}

const loadUsers = createAsyncThunk(
    'loadUsers/usersSlice',
    async (_, thunkAPI) => {
    try {
        const users = await userService.getAllUsers()
        thunkAPI.dispatch(usersActions.changeLoadingState(true))
        return thunkAPI.fulfillWithValue(users)
    } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data)
    }
})

let loadUserById = createAsyncThunk(
    'loadUserById/usersSlice',
    async (id: string, thunkAPI) => {
        try {
            const user = await userService.getUserById(id)
            return thunkAPI.fulfillWithValue(user)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
});

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialState,
    reducers: {
        changeLoadingState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        },
    },
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(loadUserById.fulfilled, (state, action) => {
            state.user = action.payload
        })
})

export const usersActions = {
    ...usersSlice.actions,
    loadUsers,
    loadUserById
}