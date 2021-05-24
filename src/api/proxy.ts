// const responceStatuses = {
//     200 : "success",
//     400 : "error"
// }

const urlBase = "http://localhost:58691/api";

export const fetchData = async (body : any, path : string, method : string = "GET", headers : object = {}) =>{
    let options = {
        method: method,
        headers: Object.assign({
            "Content-Type": "application/json"
          }, headers),
    };

    if(body != null){
        options = Object.assign(options, {body: JSON.stringify(body)})
    }

    let res = await fetch(`${urlBase}${path}`, options);
    let data = await res.json();
    data.status = res.status;
    return data;
}

export const resStatus = (code : any) => {
    if(code === 200)
        return "success";
    if(code === 400)
        return "error"; 
}