import React, { useState } from "react";
import img from "../../assets/villainImages/PredatorHome.jpg"
import logo from "../../assets/villainImages/PredatorHome.jpg"
import LoginForm from "../../components/form/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { handleNavClickDelay } from "../../handleNavClickDelay";
import UserData from "../../components/UserData";

export const Login = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  return (
    <div  className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen" style={{backgroundColor:"green"}}>
      <div className="lg:w-[40%]">
{/* <UserData /> */}

      <LoginForm />
        <div className="pb-4 text-sm flex items-center justify-between">
            <p>Don't have an account?</p>
            <button onClick={()=>handleNavClickDelay("/register",1000,navigate,true,setIsActive)} className="font-semibold underline">Sign up</button>
        </div>
   
 
      </div>

    
    </div>
  );
};


export default Login