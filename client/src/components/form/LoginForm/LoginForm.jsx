import React, { useEffect, useRef, useState} from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import FormFieldInput from '../../input/FormFieldInput';
import { useLoginMutation } from '../../../redux/api/user'
import { handleNavClickDelay } from "../../../handleNavClickDelay";
import "./styles.css"
import {  useDispatch } from "react-redux";
import { setError } from '../../../redux/feature/session/sessionSlice';




const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email ? location.state.email : ""  );
  const [password,setPassword] = useState(""); 
  const [dataRes, setDataRes] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();



  const loginForm = useRef(null);
  const [ login ] = useLoginMutation();



  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);

    //let isValid = isValidInp;ut(e.target.value)
    //console.log("valid username === " ,isValid)
    

  }

  const onChangePasswordHandler=(e)=>{
    e.preventDefault();
    setPassword(loginForm.current.password.value)
    dispatch(setError(""))
    //console.log("valid password === " ,isValid)
  
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();  
    const password = loginForm.current?.password?.value;
     
login({email : email ,password: password})
.then((response)=>{

  if(response.error){

    dispatch(setError(response.error.data.message))

  }
  else{
  localStorage.setItem("authKey",JSON.stringify(response.data))
  setDataRes(response.data);
  navigate("/dashboard",{ state : response.data})
  }

})

}
    return (
      <div className='container' style={{backgroundColor:"black"}}>
        <div className="text-center py-4">
          <h1 className="text-7xl font-semibold text"
          style={{

            textAlign: 'center',
            textShadowColor: 'green',
            textShadowRadius: 20,
            color:"green"
        
          }}
          
          >Login</h1>
          <p className="font-light text-lg" style={{fontStyle: "italic",fontWeight: "bold",color:"green" }}>
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
            <p onClick={()=>handleNavClickDelay("/forgotpassword",1000,navigate,true,setIsActive, {email : email})}  style={{fontStyle:"italic",cursor: "pointer",color:"green" }}>Forgot password?</p>
            <p onClick={()=>handleNavClickDelay("/resetpassword",1000,navigate,true,setIsActive, {email : email})} className="font-semibold underline" style={{fontStyle:"italic",cursor: "pointer",color:"green"}}
              >Change Password</p>
        </div>

          <button className="bg- text-white rounded-lg w-full p-2 mb-4" style={{backgroundColor:"green"}}>Login</button>
        
        </form>


        
      </div>
    );

  }

export default LoginForm;