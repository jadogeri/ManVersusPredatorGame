import React, {useRef, useState} from 'react'
import InputField from '../../input/FormFieldInput';
import img from "../../../assets/villainImages/PredatorHome.jpg"
import { handleNavClickDelay } from '../../../handleNavClickDelay';
import UserData from '../../../components/UserData';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForgotPasswordMutation } from '../../../redux/api/user';
import {openModal} from "../../../utils/htmlUtil/openModal"
import {  useDispatch } from "react-redux";
import { setError } from '../../../redux/feature/session/sessionSlice';
import Spacer from '../../Spacer';
import ForgotPasswordModal from '../../modals/ForgotPasswordModal';


const ForgotPasswordForm = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const resetPasswordFormRef = useRef("");
  
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email ? location.state.email : ""  );

  const  [ forgotPassword ] = useForgotPasswordMutation();



  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
    dispatch(setError(""));

  }
  

  const handleSubmit = (e) => {
    e.preventDefault()


    if (email.trim().length === 0) {
      dispatch(setError("Email must be provided"));

    }else{
      if(email.trim().indexOf("@") === -1){
        dispatch(setError("Emailis not valid"));

      }
      else{
       // openModal("forgotpassword")     

    forgotPassword({	email})
    .then((response) => {		
   
        if(response.error){

          dispatch(setError(response.error.data.message))
      
        } else{
          openModal("resetPassword")     

        }
    }) 
  }
  }

}

  return (
    <>
    <ForgotPasswordModal/>
    <div className='container'>
      <div className="text-center py-4">
        <h1 className="text-7xl font-semibold text"
        style={{

          textAlign: 'center',
          textShadowColor: 'green',
          textShadowRadius: 20,
          color:"green"
      
        }}
        
        >Forgot Password</h1>
        <p className="font-light text-lg" style={{fontStyle: "italic",fontWeight: "bold",color:"green" }}>
          please reset password to access our services
        </p>
      </div>
      <form onSubmit={handleSubmit} ref={resetPasswordFormRef}>
        <InputField containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2"  onChange={onChangeEmailHandler}
                    inputClassName="bg-transparent w-full outline-none" type="text" placeholder="email" value={email}
                    iconClassName="fa fa-envelope fa-md" />
 
<Spacer marginBottom={15} marginTop={10}/>
        <button className="bg-black text-white rounded-lg w-full p-2 mb-4"
                    style={{backgroundColor:"green"}}

        >Send to email</button>
      </form>
    </div>
          <div className="pb-4 text-sm flex items-center justify-between">
          <p style={{color:"green"}}>Remember Password?</p>
          <button onClick={()=>{dispatch(setError(""));
                         handleNavClickDelay("/login",1000,navigate, true, setIsActive,{email : email})}} className="font-semibold underline"
            style={{color:"green"}}
            >Login</button>
      </div>
    </>
  );
};

export default ForgotPasswordForm  

/**
 * 
 * 
 * 
 



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
      //  openModal("resetPassword")     
        //navigate('/signin');
    })
.catch((error) =>{  console.log(JSON.stringify("line 67 error: ",error));});               

  }

}




 */