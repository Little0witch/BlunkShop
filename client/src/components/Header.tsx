import { FC } from "react";
import { useAuth } from "../hooks/auth";
import { useAppDispatch } from "../store/hooks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../store/userSlice";
import { removeTokenFromLocalStorage } from "../helpers/LocalStorage";

export const Header: FC = () => {
    const isAuth: boolean = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocalStorage('token')
        toast.success('You logged out')
        navigate('/')
    }

    return (
        <header className="flex justify-between items-center bg-gray-200">
            <Link to='/products' className="ml-6    ">
                <h1 className="font-bold text-xl">BlankShop</h1>
            </Link>

            { isAuth && 
                <nav className="flex justify-between gap-4 ml-auto mr-10">
                    <NavLink to={'/products'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Home</NavLink>
                    <NavLink to={'/favourite'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Favourite</NavLink>
                    <NavLink to={'/basket'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Basket</NavLink>
                    <NavLink to={'/purchases'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Purchases</NavLink>
                </nav>
            }

            { isAuth ? (
                <button onClick={logoutHandler} className="btn text-black/50 text-lg hover:text-black mr-4">
                    <span>Log Out</span>
                </button> ) : (
                <Link className="py-2 text-black/50 hover:text-black text-lg mr-4" to={'auth'}>
                    Log In
                </Link> )
            }
        </header>
    )
}