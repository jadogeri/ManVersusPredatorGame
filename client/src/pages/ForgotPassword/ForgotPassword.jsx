import React, {useRef, useState} from 'react'
import img from "../../assets/villainImages/Predator.jpg"
import ForgotPasswordForm from '../../components/form/ForgotPasswordForm/ForgotPasswordForm';
import { handleNavClickDelay } from '../../handleNavClickDelay';
import UserData from '../../components/UserData';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useResetPasswordMutation } from '../../redux/api/user';
import "./styles.css"
import Spacer from '../../components/Spacer';

import { useSelector} from "react-redux";
import { selectSessionError } from "../../redux/feature/session/sessionSlice";


const ForgotPassword = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
 // const navDelay = (route) => { setTimeout(navigate(route), 5000);

  const errorMessage = useSelector(selectSessionError)



  return (
    <div style={{backgroundColor: "black"}}>
    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      





      <div id="resetPassword" className="modal">
  
  <form className="modal-content animate" >
    <div className="imgcontainer">
      <img src={require("../../assets/villainImages/PredatorHome.jpg")} alt="Avatar" className="avatar" style={{height :200,width:200}}/>
    </div>
    <h2>Password Change </h2>
    <p>Successful , password has been changed
    </p>

    <div className="container">       
        
      <button type="submit"    onClick={()=>{navigate("/login")}}>GO TO SIGN IN SCREEN</button>
   
    </div>


  </form>
</div> 






      <div className="lg:w-[40%]">
      {/* {isLogin ? <Login /> : <Signup />} */}

      {/* <UserData /> */}
      <ForgotPasswordForm /> 
        {/* <div className="pb-4 text-sm flex items-center justify-between">
            <p>Remember Password?</p>
            <button onClick={()=>handleNavClickDelay("/login",1000,navigate, true, setIsActive,{email : email})} className="font-semibold underline">Login</button>
        </div> */}
        <div className="flex items-center space-x-4">
     
        </div>
        <Spacer marginBottom={5}/>

        {
          errorMessage.length === 0?<p style={{display:"block"}}>.</p>: <p style={{color :"red",display:"block"}}>{errorMessage}</p>
        }
      </div>

      

      <div className="w-1/2 hidden lg:block">
        {/* <img className="rounded-2xl"  alt=""  src={boy}/> */}
        <img className="rounded-2xl"  alt=""  src={img}/>

      </div>
    </div>
    </div>
  );
};



export default ForgotPassword


