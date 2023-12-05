import { FC, useEffect, useState } from "react";
import { ProductService } from "../api/ProductService";
import { IProduct, IUser } from "../types/types";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { Product } from "../components/Product";
import { useAppSelector } from "../store/hooks";

export const productsLoader = async () => {
    const products: IProduct[] = await ProductService.findAll()
    console.log('ProductsLoader')
    return products
}



export const ProductsPage: FC = () => {
    let products: IProduct[] = useLoaderData() as IProduct[]

    
    return (
        <>
            <div className="grid grid-cols-4 gap-4 items-start">
                { products.map(p => <Product key={p.id} product={p} />) }
            </div>

            { products?.length === 0 && <h1>No products</h1> }
        </>
        
    )
}