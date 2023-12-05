import { FC } from "react";
import { useAppSelector } from "../store/hooks";
import { IProduct } from "../types/types";
import { Product } from "../components/Product";

export const FavouriteProdutsPage: FC = () => {
    const products: IProduct[] | undefined = useAppSelector((state) => state.user.user?.favouriteProducts)

    return (
        <>
            <div className="grid grid-cols-3 gap-4 items-start">
                { products &&  products.map(p => <Product key={p.id} product={p} />) }
            </div>

            { products?.length === 0 && <h1>No products</h1> }
        </>
    )
}