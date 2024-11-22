import React, {useRef, useState} from 'react'
import img from "../../assets/villainImages/Predator.jpg"
import ResetPasswordForm from '../../components/form/ResetPasswordForm/ResetPasswordForm';
import { handleNavClickDelay } from '../../handleNavClickDelay';
import UserData from '../../components/UserData';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useResetPasswordMutation } from '../../redux/api/user';
import "./styles.css"
import ConfirmationModal from "../../components/modals/ConfirmationModal/ConfirmationModal"
import { openModal } from '../../utils/htmlUtil/openModal';


const ResetPassword = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
 // const navDelay = (route) => { setTimeout(navigate(route), 5000);
 const registerForm = useRef("");
  
  const location = useLocation();
  const [email, setUsername] = useState(location.state?.email );
  const [resetPassword] = useResetPasswordMutation();
  const [usernameNullError, setUsernameNullError] = useState(false)
  const [passwordNullError, setPasswordNullError] = useState(false)
  const [newPasswordNullError, setNewPasswordNullError] = useState(false)
  const [confirmPasswordNullError, setConfirmPasswordNullError] = useState(false)

  const onChangeUsernameHandler=(e)=>{
    e.preventDefault();
    setUsername(e.target.value);
    // let isValid = isValidInput(e.target.value)
    // console.log("valid username === " ,isValid)
    // setUsernameNullError(isValid);    

  }
  
  
  const onChangePasswordHandler=(e)=>{
    e.preventDefault();

    // let isValid = isValidInput(registerForm.current.current_password.value)
    // console.log("valid password === " ,isValid)
    // setPasswordNullError(isValid);  
  
  } 

  const onChangeNewPasswordHandler=(e)=>{
    e.preventDefault();
    // let isValid = isValidInput(registerForm.current.new_password.value)
    // console.log("valid new password === " ,isValid)
    // setNewPasswordNullError(isValid);  
      
  }
  const onChangeConfirmPasswordHandler=(e)=>{
    e.preventDefault();
    // let isValid = isValidInput(registerForm.current.confirm_password.value)
    // console.log("valid confirm password === " ,isValid)
    // setConfirmPasswordNullError(isValid);  
      
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
    const current_password = registerForm.current.current_password.value
    const new_password = registerForm.current.new_password.value
    const confirm_password = registerForm.current.confirm_password.value
    console.log("clicking handle submit reset password")
   

    if (email.trim().length === 0) {
      console.log("invalid username")
       
        setUsernameNullError(true);
       // openModal('id01');

    }
     if(current_password.trim().length === 0){
      console.log("invalid password")

        setPasswordNullError(true);  
      
      //  openModal('id01');
    }
    
    if(new_password.trim().length === 0){
      console.log("invalid  newPasswordNullError  password")

        setNewPasswordNullError(true);  
      
      //  openModal('id01');
    }

    if(confirm_password.trim().length === 0){
      console.log("invalid confirmPasswordNullError  password")

        setConfirmPasswordNullError(true);  
      
       // openModal('id01');
    }

  
    if(new_password !== confirm_password){
        alert('Passwords did not match!')
      //  openModal('id01');

    }
    if(usernameNullError === false && passwordNullError === false && newPasswordNullError === false && confirmPasswordNullError === false 
       && new_password.length >= 8 && new_password === confirm_password){

    resetPassword({	email : email, new_password,confirm_password})
    .then((response) => {		
        console.log(JSON.stringify(response))	
        const {data} = response
        console.log(JSON.stringify(data))       
        alert(JSON.stringify(data))   
        //openModal("resetPassword")    
        openModal("idconfirm01") 
        //navigate('/signin');
    })
.catch((error) =>{  console.log(JSON.stringify("line 67 error: ",error));});               

  }

}

  return (
    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      



      <div id="idconfirm01" className="modal" >
  
 
  <ConfirmationModal  message="If an account is found with the provided username , a message with instructions
                              for resetting your password will be sent momentarily. If you did not receive an 
                              email, pleases check username provided." header="Password Reset Email Sent" id="idconfirm01"/> 
</div> 




      {/* <div id="resetPassword" className="modal">
  
  <form className="modal-content animate" >
    <div className="imgcontainer">
      <img src={require("../../assets/logo.jpg")} alt="Avatar" className="avatar" style={{height :200,width:200}}/>
    </div>
    <h2>Password Change </h2>
    <p>Successful , password has been changed
    </p>

    <div className="container">       
        
      <button type="submit"    onClick={()=>{navigate("/login")}}>GO TO SIGN IN SCREEN</button>
   
    </div>


  </form>
</div>  */}








      <div className="lg:w-[40%]">
      {/* {isLogin ? <Login /> : <Signup />} */}

      {/* <UserData /> */}
      <ResetPasswordForm /> 
        {/* <div className="pb-4 text-sm flex items-center justify-between">
            <p>Remember Password?</p>
            <button onClick={()=>handleNavClickDelay("/login",1000,navigate, true, setIsActive,{email : email})} className="font-semibold underline">Login</button>
        </div> */}
        <div className="flex items-center space-x-4">
     
        </div>

        
      </div>

      

      <div className="w-1/2 hidden lg:block">
        {/* <img className="rounded-2xl"  alt=""  src={boy}/> */}
        <img className="rounded-2xl"  alt=""  src={img}/>

      </div>
    </div>
  );
};



export default ResetPassword


