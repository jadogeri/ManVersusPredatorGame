import axios from "axios";

//const baseURL = process.env.BASE_URL;


const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"       
}

const api =  axios.create({
      
    //baseURL: baseURL ,
    baseURL :  "https://manversuspredatorgame.onrender.com/api",
    headers: headers
  
})
console.log(api);

export default api