import {createContext, useContext, useState} from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}: any) => {
    const [token, setToken]: any = useState(null);
    return (
        //@ts-ignore
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);