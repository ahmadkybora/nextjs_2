import http from "./httpService";

interface IUser {
    password: string;
    username: string;
}

class authServices {
    public static async login(payload: IUser)
    {
        await http.post(http.baseURL + "/api/auth/login", payload);
    }
}

export default authServices;
