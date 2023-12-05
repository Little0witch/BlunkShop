import { FC } from "react";
import { IProduct } from "../types/types";
import { useAppSelector } from "../store/hooks";
import { Product } from "../components/Product";

export const PurchasesPage: FC = () => {
    const products: IProduct[] | undefined = useAppSelector((state) => state.user.user?.productsInPurchases)

    return (
        <>
            <div className="grid grid-cols-4 gap-4 items-start">
                { products &&  products.map(p => <Product key={p.id} product={p} />) }
            </div>
            
            { products?.length === 0 && <h1>No products</h1> }
        </>
    )
}