import { FC } from "react";
import { ProductService } from "../api/ProductService";
import { IProduct } from "../types/types";
import { useLoaderData } from "react-router-dom";
import { Product } from "../components/Product";

export const productsLoader = async () => {
    const products: IProduct[] = await ProductService.findAll()
    return products
}



export const ProductsPage: FC = () => {
    const products: IProduct[] = useLoaderData() as IProduct[]

    return (
        <>
            <div className="grid grid-cols-4 gap-4 items-start">
                { products.map(p => <Product key={p.id} product={p} />) }
            </div>

            { products?.length === 0 && <h1>No products</h1> }
        </>
        
    )
}