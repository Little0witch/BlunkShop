import { FC } from "react";
import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

interface IProtectedRouteProps {
    children: JSX.Element
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({children}) => {
    const isAuth = useAuth()
    const navigate = useNavigate()

    if (!isAuth) {
        navigate('/unauthorized')
    }

    return (
        <>
            { isAuth && children } 
        </>
    )
}