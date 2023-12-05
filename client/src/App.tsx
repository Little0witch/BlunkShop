import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { AuthService } from './api/AuthService'
import { getTokenFromLocalStorge } from './helpers/LocalStorage'
import { login, logout } from './store/userSlice'

function App() {
    const dispatch = useAppDispatch()
    const checkAuth = async () => {
        const token  = getTokenFromLocalStorge()
        try {
            if (token) {
                const data = await AuthService.getProfile()
                if (data) {
                    dispatch(login(data))
                }
                else {
                    dispatch(logout())
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return <RouterProvider router={router}/>

}

export default App
