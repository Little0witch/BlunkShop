import { FC, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { setTokenToLocalStorage } from "../helpers/LocalStorage";
import { login } from "../store/userSlice";
import { AuthService } from "../api/AuthService";
import { toast } from "react-toastify";
import { IRegistrationResponseData } from "../types/types";

export const AuthPage: FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault()
            const data = await AuthService.login({email: email, password: password})
            if (data) {
                setTokenToLocalStorage('token', data.token)
                dispatch(login(data))
                toast.success('Account have been created')
                navigate('/')
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data: IRegistrationResponseData | undefined = await AuthService.registration({email: email, password: password})
            if (data) {
                toast.success('Account have been created')
                setIsLogin(!isLogin)
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    return (
        <div className="mx-auto mt-8 flex flex-col justify-center items-center w-full">
            <h1 className="text-center mb-8">
                { isLogin ? 'Login' : 'Registration' }
            </h1>

            <form 
                onSubmit={isLogin ? loginHandler : registrationHandler}
                className="flex flex-col items-center gap-4 mx-auto w-1/5"
            >
                <input onChange={(e) => setEmail(e.target.value)} className="input" type="text" placeholder="email"/>
                <input onChange={(e) => setPassword(e.target.value)} className="input" type="password" placeholder="password" />
                <button className="btn btn-green">
                    Submit
                </button>
            </form>

            <div className="flex flex-col justify-center gap-3 mt-5">
                <button onClick={() => setIsLogin(!isLogin)}>
                    { isLogin ? 'Don\'t have an account?' : 'Already have an account?' }
                </button>
            </div>
        </div>
    )
}