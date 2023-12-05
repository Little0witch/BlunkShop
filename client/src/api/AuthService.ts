import { ILoginData, IRegistrationResponseData, IUser } from "../types/types"
import { API } from "./AxiosAPI"

export const AuthService = {
    async registration(userData: ILoginData): Promise<IRegistrationResponseData | undefined> {
        const { data } = await API.post<IRegistrationResponseData>('user', userData)
        return data
    },
    async login(userData: ILoginData): Promise<IUser | undefined> {
        const { data } = await API.post<IUser>('auth/login', userData)
        return data
    },
    async getProfile(): Promise<IUser | undefined> {
        const { data } = await API.get<IUser>('auth/profile')
        if (data) return data
    }
}