import React, { useEffect, useRef, useState} from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import FormFieldInput from '../../input/FormFieldInput';
import { useLoginMutation } from '../../../redux/api/user'
import { handleNavClickDelay } from "../../../handleNavClickDelay";



const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email ? location.state.email : ""  );
  const [password,setPassword] = useState(""); 
  const [dataRes, setDataRes] = useState(null);
  const [isActive, setIsActive] = useState(false);


  const loginForm = useRef(null);
  const [ login ] = useLoginMutation();



  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
    //let isValid = isValidInput(e.target.value)
    //console.log("valid username === " ,isValid)
    

  }

  const onChangePasswordHandler=(e)=>{
    e.preventDefault();

    setPassword(loginForm.current.password.value)
    //console.log("valid password === " ,isValid)
  
  }

  const handleSubmit = (e) => {
    
    let newData = {}
   
    e.preventDefault();  
    const password = loginForm.current?.password?.value;
     
 console.log("before login call ..........................................................................") 
login({email : email ,password: password})
.then((response)=>{
  console.log("response data === ",JSON.stringify(response.data));
  console.log("after login call ..........................................................................") 

  if(response.error){
    alert("errrrrrrrrrrrrorrrrrrrrr")

  }
  else{
  localStorage.setItem("authKey",JSON.stringify(response.data))
  setDataRes(response.data);
  navigate("/dashboard",{ state : response.data})
  }

})

}


    return (
      <div>
        <div className="text-center py-4">
          <h1 className="text-7xl font-semibold">Login</h1>
          <p className="font-light text-lg">
            Please login to access our services
          </p>
        </div>
        <form onSubmit={handleSubmit} ref={loginForm}>
        <FormFieldInput containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} value={email}
                  inputClassName="bg-transparent w-full outline-none" type="text" placeholder="email" onChange={onChangeEmailHandler}
                  iconClassName="fa fa-envelope fa-md" />

      <FormFieldInput containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" name="password"
                  inputClassName="bg-transparent w-full outline-none" type="password" placeholder="password" 
                  iconClassName="fa fa-lock fa-lg" required={true}  onChange={onChangePasswordHandler}/>
          <div className="pb-4 text-sm flex items-center justify-between">
            <p onClick={()=>handleNavClickDelay("/forgotpassword",1000,navigate,true,setIsActive, {email : email})}  style={{fontStyle:"italic",cursor: "pointer"}}>Forgot password?</p>
            <button onClick={()=>handleNavClickDelay("/resetpassword",1000,navigate,true,setIsActive, {email : email})} className="font-semibold underline">Change Password</button>
        </div>

          <button className="bg-black text-white rounded-lg w-full p-2 mb-4" >Login</button>
        
        </form>


        <div>email == {email} </div>
        <div>data response ==  {JSON.stringify(dataRes,null,3)} </div>
      </div>
    );

  }

export default LoginForm;