import {fetchData} from "./proxy"

export const getSecret = (cb: any) => {
    fetch("/user.json").then((res) => {        
        res.json().then((data)=>{
            cb(data);
        })
    }).catch(()=>{
        console.log("Error");
    });
}

export const login = async (body : any) => {       
    return await fetchData(body, "/ApplicationUser/login", "POST");
}

export const register = async (body : any) => {       
    return await fetchData(body, "/ApplicationUser/register", "POST");
}
