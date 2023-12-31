import { useState } from "react";
import {useAuthContext} from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email, password, name, lastName, age, gender, professions, skills, experiences, phoneNumber) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, name, lastName, age, gender, professions, skills, experiences, phoneNumber})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
             localStorage.setItem('user', JSON.stringify(json))
             
             //update authContext
             dispatch({type: 'LOGIN', payload: json})
             setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}