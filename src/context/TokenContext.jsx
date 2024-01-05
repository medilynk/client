import { createContext, useContext } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext();

export const AuthProviderToken = ({ children }) => {
    const getToken = () => {
        const cookies = new Cookies();
        return cookies.get('token');
    };

    return (
        <AuthContext.Provider value={{ getToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
