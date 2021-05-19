
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
    let res = await fetch("http://localhost:58691/api/ApplicationUser/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(body)
    });
    let data = await res.json();
    console.log(data);
}
