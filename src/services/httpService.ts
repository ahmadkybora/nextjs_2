import Axios from "axios";

const BASE_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;

Axios.defaults.baseURL = BASE_URL;

export default {
    baseURL: Axios.defaults.baseURL,
    delete: Axios.delete,
    get: Axios.get,
    post: Axios.post,
    put: Axios.put,
    patch: Axios.patch,
};
