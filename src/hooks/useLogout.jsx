// import  toast  from 'react-hot-toast';
import {useAuthContext} from './useAuthContext'


export const useLogout = () =>{
const {dispatch} = useAuthContext()
    const logout=()=>{
        // remove user from local storage
        localStorage.removeItem('user');
        //dispatch logout action
        dispatch({type:'LOGOUT'})
        // toast.success("Log out")

    }

    return {logout}

}