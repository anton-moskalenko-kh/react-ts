import axios from "axios";
import {baseUrl, urls} from "../constants/constants";
import {PostModel} from "../models/PostModel";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

export const postService = {
    getAllPosts: async (): Promise<PostModel[]> => {
        const response = await axiosInstance.get(urls.posts.base)
        return response.data
    },
    getPostsById: async (id: string): Promise<PostModel> => {
        const response = await axiosInstance.get(urls.posts.byId(+id))
        return response.data
    }
}