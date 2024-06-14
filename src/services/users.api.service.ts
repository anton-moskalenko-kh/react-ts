import axios from "axios";
import {baseUrl, urls} from "../constants/constants";
import {UserModel} from "../models/UserModel";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

export const userService = {
    getAllUsers: async (): Promise<UserModel[]> => {
        const response = await axiosInstance.get(urls.users.base)
        return response.data
    },
    getUserById: async (id: string): Promise<UserModel> => {
        const response = await axiosInstance.get(urls.users.byId(+id))
        return response.data
    }
}