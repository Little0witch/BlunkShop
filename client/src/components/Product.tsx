import { FC, useState } from "react";
import { IProduct, IUser } from "../types/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { UserService } from "../api/UserService";
import { changeUser } from "../store/userSlice";

import liked from '../assets/favourite-white.svg'
import nonLiked from '../assets/favourite-white.svg'


interface IProductProps {
    product: IProduct
}

export const Product: FC<IProductProps> = ({ product }) => {
    const user: IUser = useAppSelector((state) => state.user.user) as IUser

    const [isLiked, setIsLiked] = useState<boolean>(user.favouriteProducts.includes(product))
    const [isInBasket, setIsInBasket] = useState<boolean>(user.productsInBasket.includes(product))

    

    const dispatch = useAppDispatch()

    const likeHandler = async () => {
        const { data } = await UserService.toggleFavouriteProduct(user.id, product)
        dispatch(changeUser(data))
        setIsLiked(!setIsLiked)
    }

    const addToBasketHandler = async () => {
        const { data } = await UserService.toggleBasketProduct(user.id, product)
        dispatch(changeUser(data))
        setIsInBasket(!setIsInBasket)
    }

    return (
        <div className="h-[80px] flex flex-col justify-between items-start relative">
            <img className="h-[60px]" src={"/images/" + product.image} alt={product.title} />
            <p>{ product.brand }</p>
            <p>{ product.title }</p>
            <p className="font-bold">{ product.price }</p>
            <button onClick={() => addToBasketHandler()}> 
                { isInBasket ? 'Add to basket' :  'Remove from basket' }
            </button>

            <img 
                onClick={() => likeHandler()} 
                className="absolute top-2 right-2" 
                src={ isLiked ? liked : nonLiked } alt="" 
            />
        </div>
    )
}