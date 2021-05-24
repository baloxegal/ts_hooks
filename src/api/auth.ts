import {fetchData} from "./proxy"
import {AuthContext} from '../contexts/AuthProvider'
import { useContext } from "react";

export const login = async (body : any) => {
         
    let data = await fetchData(body, "/ApplicationUser/login", "POST");
    localStorage.setItem("token", data.token)
    let userData = await getUser();
    
    return data;
}

export const register = async (body : any) => {       
    return await fetchData(body, "/ApplicationUser/register", "POST");
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