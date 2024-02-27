import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
export const useAuthorization = () => {
    return useContext (AuthContext);
}