
// import  toast  from 'react-hot-toast';
import {useAuthContext} from './useAuthContext'

import { useNavigate } from "react-router-dom";

export const useLogout = () =>{
    const nav = useNavigate();
const {dispatch} = useAuthContext()
    const logout=()=>{
        // remove user from local storage
        localStorage.removeItem('user');
        //dispatch logout action
        dispatch({type:'LOGOUT'})
        // toast.success("Log out")
        nav('/')

    }

    return {logout}

}