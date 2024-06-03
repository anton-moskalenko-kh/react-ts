import axios from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retrieveLocalStorageData} from "../helpers/helpers";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
})

const authService = {
    authorization: async (authData: IAuthDataModel):Promise<boolean> => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth', authData)
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
        return !!(response?.data.access && response?.data.refresh)
    },
    refresh: async () => {
        const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

export {
    authService
}