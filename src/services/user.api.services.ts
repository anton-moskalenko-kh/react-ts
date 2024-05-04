import axios, {AxiosResponse} from "axios";
import {UserResponseModel} from "../models/UserResponseModel";
import {PostResponseModel} from "../models/PostResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json'}
})

const getAllUsers = ():Promise<AxiosResponse<UserResponseModel>> => {
    return axiosInstance.get('/users')
}

const getPostsOfUser = (id: number):Promise<AxiosResponse<PostResponseModel>> => {
    return axiosInstance.get('/users/' + id + '/posts')
}

export {
    getAllUsers,
    getPostsOfUser
}