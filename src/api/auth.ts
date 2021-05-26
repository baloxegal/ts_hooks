import { useContext } from "react";
import { TokenContext } from "../contexts/AuthProvider";
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

export const getUser = async () => {
    const token =  localStorage.getItem("token");    
    let data = await fetchData(null, "/UserProfile", "GET", {"Authorization" : `Bearer ${token}`});  
    localStorage.setItem('user', JSON.stringify(data));
    console.log(data); 
    return data;
}

export const getUserName = () => {
    let user = JSON.parse(localStorage.getItem("user")??"null");
    return user?.userName??null;
}

export const IsAuthenticated = () => {
    const {token} = useContext(TokenContext);
    return token? true : false;
}