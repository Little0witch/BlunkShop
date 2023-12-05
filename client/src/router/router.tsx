import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import { ProductsPage, productsLoader } from "../pages/ProductsPage";
import { AuthPage } from "../pages/AuthPage";
import { BasketPage } from "../pages/BasketPage";
import { FavouriteProdutsPage } from "../pages/FavouriteProductsPage";
import { PurchasesPage } from "../pages/PurchasesPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                loader: productsLoader,
                //element: <Home/>,
                element: <ProductsPage/>,
            },
            {
                path: 'auth',
                element: <AuthPage/>,   
            },
            {
                path: 'products',
                loader: productsLoader,
                element: <ProductsPage/>,
            },
            {
                path: 'basket',
                element: <ProtectedRoute><BasketPage/></ProtectedRoute>,
            },
            {
                path: 'favourite',
                element: <ProtectedRoute><FavouriteProdutsPage/></ProtectedRoute>,
            },
            {
                path: 'purchases',
                element: <ProtectedRoute><PurchasesPage/></ProtectedRoute>,
            },
            {
                path: 'unauthorized',
                element: <ErrorPage/>,
            },
            {
                path: 'error',
                element: <ErrorPage/>,
            }
        ]
    }
])