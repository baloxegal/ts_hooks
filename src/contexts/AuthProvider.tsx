import { useState, createContext } from "react";

interface User{
    name : string;
}

export type UserContextType = {
    user : User;
    setUser: (user: User) => void;
}

export type TokenContextType = {
    token : any;
    setToken: (token: any) => void;
}

export const UserContext = createContext<UserContextType>({
    user : {name: ""}, setUser: () =>{}});

export const TokenContext = createContext<TokenContextType>({
        token : null, setToken: () =>{}});

export const AuthProvider = (props : any) => {
    //const [user, setUser] = useState({name : "Vasea"});
    const [token, setToken] = useState(null);
    return(
        <TokenContext.Provider value = {{token, setToken}}>{props.children}</TokenContext.Provider>
    )
}