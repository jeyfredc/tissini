import { url } from "../config/variables";

export const peticion = (endpoint, method, data) =>{
    const baseUrl = `${url}/${endpoint}`;

    return fetch(baseUrl,{
        method : method,
        headers: {
            'Accept':'*/*',
            'Content-Type': 'application/json', 
            "Accept-Encoding": "gzip, deflate, br" 
        },
        body:JSON.stringify(data)
    })
}

export const peticionGET = (endpoint, method) =>{
    const baseUrl = `${url}/${endpoint}`;
    return fetch(baseUrl,{
        method : method,
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, deflate, br",
          },
    })

}