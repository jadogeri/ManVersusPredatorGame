import React, {useState} from 'react'
import img from "../../assets/villainImages/Predator.jpg"
import RegisterForm from '../../components/form/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { handleNavClickDelay } from '../../handleNavClickDelay';
import UserData from '../../components/UserData';
import { useSelector} from "react-redux";
import { selectSessionError } from "../../redux/feature/session/sessionSlice";


const Register = () => {
  const errorMessage = useSelector(selectSessionError)
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
 // const navDelay = (route) => { setTimeout(navigate(route), 5000);

  return (
    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      
      <div className="lg:w-[40%]">
      {/* {isLogin ? <Login /> : <Signup />} */}

      <RegisterForm />
        <div className="pb-4 text-sm flex items-center justify-between">
            <p>Already have an account?</p>
            <button onClick={()=>handleNavClickDelay("/login",1000,navigate, true, setIsActive)} className="font-semibold underline">Login</button>
        </div>
        {
          errorMessage.length === 0?<p style={{display:"block"}}>.</p>: <p style={{color :"red",display:"block"}}>{errorMessage}</p>
        }
        
      </div>     

      <div className="w-1/2 hidden lg:block">
        {/* <img className="rounded-2xl"  alt=""  src={boy}/> */}
        <img className="rounded-2xl"  alt=""  src={img}/>

      </div>
    </div>
  );
};



export default Register