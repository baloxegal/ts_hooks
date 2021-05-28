import { useContext } from "react";
import { TokenContext, UserContext } from "../contexts/AuthProvider";
import {fetchData} from "./proxy"

export const login = async (body : any) => {
         
    let data = await fetchData(body, "/AuthenticationUser/login", "POST");    
    return data;
}

export const register = async (body : any) => {       
    return await fetchData(body, "/AuthenticationUser/register", "POST");
}

export const hasToken = () => {
    return !!localStorage.getItem("token");
}

export const loadUser = () => JSON.parse(localStorage.getItem("user") ?? "")


export const GetUser = async () => {
    const {token, setToken} = useContext(TokenContext);
    const {user, setUser} = useContext(UserContext);
    
    if(token){        
        if(!user){
            let userData = await fetchData(null, "/AuthorizationUser", "GET", {"Authorization" : `Bearer ${token}`});  
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        }
    } 
}

export const getUserName = () => {
    let user = JSON.parse(localStorage.getItem("user")??"null");
    return user?.userName??null;
}

export const IsAuthenticated = () => {
    const {token} = useContext(TokenContext);
    return token? true : localStorage.getItem("token");
}