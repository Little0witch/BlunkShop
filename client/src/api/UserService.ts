import { IProduct, IToggleProductDto, IUser } from "../types/types";
import { API } from "./AxiosAPI";

export const UserService = {
    async findAll(): Promise<IUser[]> {
        const { data } = await API.get<IUser[]>('user')
        return data
    },
    async toggleBasketProduct(userId: number, product: IProduct){
        const param: IToggleProductDto = { userId, product }
        const { data } = await API.patch('user/toggle/basket', param)
        return data
    },
    async toggleFavouriteProduct(userId: number, product: IProduct){
        const param: IToggleProductDto = { userId, product }
        const { data } = await API.patch('user/toggle/favourite', param)
        return data
    },
    async buyProducts() {
        const { data } = await API.post('user/buy')
        return data
    }
}