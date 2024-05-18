import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const postApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    },
    getCommentsOfPost: (postId: string): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`posts/${postId}/comments`)
    }
}

export {
    postApiService
}