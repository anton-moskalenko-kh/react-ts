import axios, {AxiosError} from "axios";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {authService} from "./auth.api.service";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        request.headers.set('Authorization', 'Bearer ' + retrieveLocalStorageData<ITokenObtainPair>('tokenPair').access)
    }
    return request
})

const carsService = {
    getCars: async () => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars')
            return response?.data
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh
                await authService.refresh(refreshToken)
                await carsService.getCars()
            }
        }
    }
}

export {
    carsService
}