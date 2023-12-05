import { useAppSelector } from "../store/hooks";

export function useAuth(): boolean {
    const isAuth: boolean = useAppSelector((state) => state.user.isAuth)
    return isAuth
}