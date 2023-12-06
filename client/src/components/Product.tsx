import { FC, useState } from "react";
import { IProduct, IUser } from "../types/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { UserService } from "../api/UserService";
import { changeUser } from "../store/userSlice";

import liked from '../assets/favourite-green.svg'
import nonLiked from '../assets/favourite-white.svg'
import { toast } from "react-toastify";


interface IProductProps {
    product: IProduct
}

export const Product: FC<IProductProps> = ({ product }) => {
    const user: IUser = useAppSelector((state) => state.user.user) as IUser

    const [isLiked, setIsLiked] = useState<boolean>(user.favouriteProducts?.includes(product))
    const [isInBasket, setIsInBasket] = useState<boolean>(user.productsInBasket?.includes(product))

    

    const dispatch = useAppDispatch()

    const likeHandler = async () => {
        const data = await UserService.toggleFavouriteProduct(user.id, product)
        dispatch(changeUser(data))
        if (isLiked) {
            toast.success('Product removed from favorites')
        }
        else {
            toast.success('Product added to favourites')
        }
        setIsLiked(!setIsLiked)
    }

    const addToBasketHandler = async () => {
        const data = await UserService.toggleBasketProduct(user.id, product)
        dispatch(changeUser(data))
        if (isInBasket) {
            toast.success('Product removed from basket')
        }
        else {
            toast.success('Product added to basket')
        }
        setIsInBasket(!setIsInBasket)
    }

    return (
        <div className="w-full flex flex-col justify-between items-start relative">
            <img className="h-66" src={"/images/" + product.image} alt={product.title} />
            <p className="font-bold">{ product.brand }</p>
            <p>{ product.title }</p>
            <span className="font-bold">{ product.price } $</span>
            <button className="btn btn-green" onClick={() => addToBasketHandler()}> 
                { isInBasket ? 'Remove from basket' : 'Add to basket' }
            </button>

            <img 
                onClick={() => likeHandler()} 
                className="absolute top-2 right-2" 
                src={ isLiked ? liked : nonLiked } alt="" 
            />
        </div>
    )
}