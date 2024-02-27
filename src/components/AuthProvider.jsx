import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = (props) => {
    const [authorization, setAuthorization] = useState({
        token: window.localStorage.getItem("token"),
    })
    return (
        <AuthContext.Provider value={{ authorization, setAuthorization }}>
            {props.children}
        </AuthContext.Provider>
    );
}
