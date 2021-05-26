import { fetchData } from "./proxy";

export const sendMessage = async (body : any) => {
         
    let data = await fetchData(body, "/Message", "POST");    
    return data;
}