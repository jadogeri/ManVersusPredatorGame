import React, { useEffect, useRef, useState} from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import InputField from '../../input/FormFieldInput';
import { useRegisterMutation } from '../../../redux/api/user';
import { handleNavClickDelay } from "../../../handleNavClickDelay";
import "./styles.css"
import {  useDispatch } from "react-redux";
import { setError } from '../../../redux/feature/session/sessionSlice';
import { openModal } from '../../../utils/htmlUtil/openModal';
import RegisterModal from '../../modals/RegisterModal';



const RegisterForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ register ] = useRegisterMutation();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const registerForm = useRef(null);

  const isValidInput = (input) =>{
    return input.length > 0;
  }

  const onChangeEmailHandler=(e)=>{
    e.preventDefault();
    dispatch(setError(""))
    

  }
  const onChangeUsernameHandler=(e)=>{
    e.preventDefault();
    dispatch(setError(""))

  }

  const onChangeNewPasswordHandler=(e)=>{
    e.preventDefault();
    dispatch(setError(""))
    
  }

  const onChangeConfirmPasswordHandler=(e)=>{
    e.preventDefault();
    dispatch(setError(""))
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();  
    console.log("handle submit pressed")
    const username = registerForm.current?.username?.value;
    const email = registerForm.current?.email?.value;
    const newPassword = registerForm.current?.newPassword?.value;
    const confirmPassword = registerForm.current?.confirmPassword?.value;
    console.log("user == ",username)
    console.log("email  ==",email)
    console.log("new == ",newPassword)
    console.log("confirm ==",confirmPassword)

    //if(!isValidInput(username) || !isValidInput(email) || !isValidInput(newPassword) || !isValidInput(confirmPassword)){

    if(newPassword != confirmPassword){
      alert("passwords do not match")
      dispatch(setError("both passwords do not match"));

    }else{
      alert("call regester endpoint")

      register({email : email, username : username , password : newPassword})
      .then((response)=>{
        if(response.error){

          dispatch(setError(response.error.data.message))
      
        }
        else{
          openModal("register");          
        }
      })
      
    }

  
    


  }

  return (
    <>
    <RegisterModal id="register" />
    <div  className='container' style={{backgroundColor:"black"}}>
      <div className="text-center py-4">
        <h1 className="text-7xl font-semibold text"
        style={{

          textAlign: 'center',
          textShadowColor: 'green',
          textShadowRadius: 20,
          color:"green"
      
        }}
        
        >Register</h1>
        <p className="font-light text-lg" style={{fontStyle: "italic",fontWeight: "bold",color:"green" }}>
          please create account to access our services
        </p>
      </div>
      <form onSubmit={handleSubmit} ref={registerForm}>
        <InputField containerClassName="flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} name="username" onChange={onChangeUsernameHandler}
                    inputClassName="bg-transparent w-full outline-none" type="text" placeholder="username" 
                    iconClassName="fa fa-user fa-lg" />

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} name="email" onChange={onChangeEmailHandler}
                    inputClassName="bg-transparent w-full outline-none" type="email" placeholder="email" 
                    iconClassName="fa fa-envelope fa-sm" />

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} name="newPassword" onChange={onChangeNewPasswordHandler}
                    inputClassName="bg-transparent w-full outline-none" type="password" placeholder="password" 
                    iconClassName="fa fa-lock fa-lg" />

        <InputField containerClassName="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2" required={true} name="confirmPassword" onChange={onChangeConfirmPasswordHandler}
                    inputClassName="bg-transparent w-full outline-none" type="password" placeholder="confirm password" 
                    iconClassName="fa fa-lock fa-lg" />


        <button className="bg-black text-white rounded-lg w-full p-2 mb-4"
        style={{backgroundColor:"green"}}>Sign up</button>
      </form>
    </div>
    </>
  );
};

export default RegisterForm