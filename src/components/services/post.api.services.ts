import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../../models/IPostModel";
import {IFormProps} from "../Form/Form";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const sendPost = (post: IFormProps): Promise<AxiosResponse<IPostModel>> => {
    return axiosInstance.post('/posts', post)
}

export {
    sendPost
}
