const responceStatuses = {
    200 : "success",
    400 : "error"
}

const urlBase = "http://localhost:58691/api";

export const fetchData = async (body : any, path : string, method : string = "GET") =>{
    let res = await fetch(`${urlBase}${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(body)
    });
    let data = await res.json();
    data.status = res.status;
    return data;
}

export const mapStatus = (code : any) => {
    if(code === 200)
        return "success";
    if(code === 400)
        return "error"; 
}