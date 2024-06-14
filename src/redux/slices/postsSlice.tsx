import {PostModel} from "../../models/PostModel";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/posts.api.service";
import {AxiosError} from "axios";

type PostsSliceType = {
    posts: PostModel[],
    post: PostModel | null,
    isLoaded: boolean
}

const initialState: PostsSliceType = {
    posts: [],
    post: null,
    isLoaded: false
}

const loadPosts = createAsyncThunk(
    'loadPosts/postsSlice',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAllPosts()
            thunkAPI.dispatch(postsActions.changeLoadedState(true))
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const loadPostsById = createAsyncThunk(
    'loadPostsById/postsSlice',
    async (id: string, thunkAPI) => {
        try {
            const post = await postService.getPostsById(id)
            return thunkAPI.fulfillWithValue(post)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    })

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: initialState,
    reducers: {
        changeLoadedState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        .addCase(loadPostsById.fulfilled, (state, action) => {
            state.post = action.payload
        })
})

export const postsActions = {
    ...postsSlice.actions,
    loadPosts,
    loadPostsById
}