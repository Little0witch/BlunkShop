import { IProduct } from "../types/types";
import { API } from "./AxiosAPI";

export const ProductService = {
    async findAll(): Promise<IProduct[]> {
        const { data } = await API.get<IProduct[]>('product')
        return data
    },
    async findOne(id: number) : Promise<IProduct> {
        const { data } = await API.get<IProduct>('product', {params:{
            id: id,
        }})
        return data
    }
}