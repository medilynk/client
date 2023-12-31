/* eslint-disable react/prop-types */

import { createContext, useReducer, useEffect } from 'react';
import Cookies from 'universal-cookie';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    const cookies = new Cookies();

    useEffect(() => {
        const token = cookies.get('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            dispatch({type:'LOGIN', payload:user})
            console.log('AuthContext user:', user);
        }
        }
        
    }, []);

    console.log('AuthContext state:', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
