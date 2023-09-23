import { useAuthContext } from "./useAuthContext"
import { useBusinessContext } from "./useBusinessContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch: businenessDispatch} = useBusinessContext()
    
    const logout = () => {
        //delete token
        localStorage.removeItem('user')

        //dispatch logout
        dispatch({type: 'LOGOUT'})
        businenessDispatch({type: 'SET_BUSINESS', payload: null})
    }

    return {logout}
}