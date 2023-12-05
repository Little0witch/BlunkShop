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
        <header className="flex justify-between items-center ">
            <Link to='/products'>
                <h1 className="font-bold">BlankShop</h1>
            </Link>

            { isAuth && 
                <nav className="ml-auto mr-10">
                    <li>
                        <NavLink to={'/products'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/favourite'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Favourite</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/basket'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Basket</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/purchases'} className={({ isActive }) => isActive ? 'text-green-300' : 'text-black'}>Purchases</NavLink>
                    </li>
                </nav>
            }

            { isAuth ? (
                <button onClick={logoutHandler} className="btn btn-red">
                    <span>Log Out</span>
                </button> ) : (
                <Link className="py-2 text-white/50 hover:text-white" to={'auth'}>
                    Log In / Sign In
                </Link> )
            }
        </header>
    )
}