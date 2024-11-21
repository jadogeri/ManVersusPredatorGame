import axios from "axios";

const baseURL = "http://localhost:4000/api";
//const baseURL = "http://localhost:4000/api/opao"

const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"       
}

const api =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  
})
console.log(api);

export default api