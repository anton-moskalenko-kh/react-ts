import axios from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
})

const authService = {
    authorization: async (authData: IAuthDataModel):Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData)
            localStorage.setItem('tokenPair', JSON.stringify(response.data))
        } catch (e) {
            console.log("Something wrong")
        }

        return !!(response?.data.access && response?.data.refresh)
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

export {
    authService
}