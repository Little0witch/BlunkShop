import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IProduct } from "../types/types";
import { Product } from "../components/Product";
import { UserService } from "../api/UserService";
import { changeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export const BasketPage: FC = () => {
    const products: IProduct[] | undefined = useAppSelector((state) => state.user.user?.productsInBasket)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const buyProductsHandler = async () => {
        const data = await UserService.buyProducts()
        dispatch(changeUser(data))
        navigate('/purchases')
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-4 items-start mx-4">
                { products &&  products.map(p => <Product key={p.id} product={p} />) }
            </div>

            { products?.length === 0 && <h1>No products</h1> }

            { products?.length !== 0 && <button onClick={() => buyProductsHandler()} className="fixed left-1/2 -translate-x-1/2 bottom-2">Оформить заказ</button> }
        </>
    )
}