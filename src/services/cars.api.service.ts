import axios from "axios";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

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
    getCars: async (page: string): Promise<ICarPaginatedModel | undefined> => {
        const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}})
        return response.data
    }
}

export {
    carsService
}