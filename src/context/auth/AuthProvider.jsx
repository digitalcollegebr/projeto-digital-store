import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);

    return (
        <AuthContext.Provider value={{ logado, setLogado }}>
            {children}
        </AuthContext.Provider>
    )
}