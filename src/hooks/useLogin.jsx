import { useState, useEffect } from "react"
import { useAuthContext } from "./useAuthContext"
import Cookies from "universal-cookie"
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom"
export const useLogin = () =>{
    const nav = useNavigate()
    const [error, setError] = useState(null)
    
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async(email, password, type)=>{
        setIsLoading(true);
        setError(null)
        
        const data={
            'email' : email,
            'password' : password,
        }

        const response = await fetch(`https://medilynk.clasher.ovh/auth/login/${type}`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if(!response.ok)
        {
            setIsLoading(false)
            setError(json.message)
            console.log(error);
            console.log(json.message)
        }

        if(response.ok)
        {
            // Decode the JWT token
            const decodedData = jwtDecode(json.token)

            // Save the decoded data to cookies
            const cookies = new Cookies()
            cookies.set('token', json.token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }) //expires in 7 days
            localStorage.setItem('user', JSON.stringify(decodedData))
            //update AuthContext
            dispatch({type:'LOGIN', payload: decodedData})
            nav(`/${decodedData.type}`)
            setIsLoading(false)
            setError(null)
            
        }
    }
   

    return {login, error, isLoading }
}