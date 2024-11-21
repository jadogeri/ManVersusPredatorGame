import React, {useRef, useState} from 'react'
import InputField from '../../input/FormFieldInput';
import img from "../../../assets/food_pics/food1.jpg"
import { handleNavClickDelay } from '../../../handleNavClickDelay';
import UserData from '../../../components/UserData';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForgotPasswordMutation } from '../../../redux/api/user';
import ResetPasswordModal from '../../modals/ResetPasswordModal';
import {openModal} from "../../../utils/htmlUtil/openModal"

const ResetPasswordForm = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
 // const navDelay = (route) => { setTimeout(navigate(route), 5000);

 const resetPasswordFormRef = useRef("");
  
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email ? location.state.email : ""  );

  const  [ forgotPassword ] = useForgotPasswordMutation();
  const [usernameNullError, setUsernameNullError] = useState(false)
  const [resData, setResdata] = useState("")




  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
    // let isValid = isValidInput(e.target.value)
    // console.log("valid username === " ,isValid)
    // setUsernameNullError(isValid);    

  }
  

 // When the user clicks on the password field, show the message box
const onFocusHandler = function(current_className,other_className) {
  document.getElementById(current_className).style.display = "block";
  document.getElementById(other_className).style.display = "none";
}

// When the user clicks outside of the password field, hide the message box
const onBlurHandler = function(current_className) {
  document.getElementById(current_className).style.display = "none";
}

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("clicking handle submit reset password")

    
   

    if (email.trim().length === 0) {
      console.log("invalid username")
       
        setUsernameNullError(true);
       // openModal('id01');

    }
  

    // if(usernameNullError === false && passwordNullError === false && newPasswordNullError === false && confirmPasswordNullError === false 
    //    && new_password.length >= 8 && new_password === confirm_password){
      if( 2 > 1){
    
console.log("email === ", email)
    forgotPassword({	email})
    .then((response) => {		
        console.log(JSON.stringify(response))	
        const {data} = response
        console.log(JSON.stringify(data))     
        setResdata(JSON.stringify(data))  
        alert(JSON.stringify(data))   
      openModal("resetPassword")     
        //navigate('/signin');
    })
.catch((error) =>{  console.log(JSON.stringify("line 67 error: ",error));});               

  }

}

  return (
    <>
    <ResetPasswordModal/>
    <div>
      <div className="text-center py-4">
        <h1 className="text-7xl font-semibold">Reset Password</h1>
        <p className="font-light text-lg">
          please reset password to access our services
        </p>
      </div>
      <form onSubmit={handleSubmit} ref={resetPasswordFormRef}>
        <InputField containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2"  onChange={onChangeEmailHandler}
                    inputClassName="bg-transparent w-full outline-none" type="text" placeholder="email" value={email}
                    iconClassName="fa fa-envelope fa-md" />
 

        <button className="bg-black text-white rounded-lg w-full p-2 mb-4">Send to email</button>
        <div>res data === {resData}</div>
      </form>
    </div>
          <div className="pb-4 text-sm flex items-center justify-between">
          <p>Remember Password?</p>
          <button onClick={()=>handleNavClickDelay("/login",1000,navigate, true, setIsActive,{email : email})} className="font-semibold underline">Login</button>
      </div>
    </>
  );
};

export default ResetPasswordForm  