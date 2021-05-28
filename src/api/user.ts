import { fetchData } from "./proxy";

export const getAllUsers = async (body : any) => {
         
    let data = await fetchData(body, "/User", "GET");    
    return data;
}

export const addFriend = async (respondentUserName : string) => {
    const user = JSON.parse(localStorage.getItem("user") ?? "");
    let body = {
        "initiatorUserName": user.userName,
        "respondentUserName": respondentUserName,        
        "status": 1,        
      } 
    let data = await fetchData(body, "/Relationship", "POST");    
    return data;
}

export const getAllFriends = async (body : any) => {
         
    let data = await fetchData(body, "/Relationship", "GET");    
    return data;
}