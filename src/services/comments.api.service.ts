import axios, {AxiosResponse} from "axios";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const commentApiService = {
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}

export {
    commentApiService
}