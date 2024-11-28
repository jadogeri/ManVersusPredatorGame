import React from 'react'
import { w3_close } from '../../utils/htmlUtil/w3_close'
import { useLogoutMutation } from '../../redux/api/user'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const [logout] = useLogoutMutation();
  const auth = JSON.parse(localStorage.getItem("AUTHKEY"));
  const navigate = useNavigate();
  return (
    <nav
    className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
    style={{ display: "none" }}
    id="mySidebar"
  >
    <a
      //href="javascript:void(0)"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-large w3-padding-16"
    >
      Close ×
    </a>

    <a href="#about"   onClick={()=>{w3_close()}}  className="w3-bar-item w3-button">
      ABOUT 
    </a>
    <a href="#team" onClick={()=>{w3_close()}}  className="w3-bar-item w3-button">
      TEAM
    </a>
    <a href="#work" onClick={()=>{w3_close()}}  className="w3-bar-item w3-button">
      WORK
    </a>
    <a href="#pricing" onClick={()=>{w3_close()}}  className="w3-bar-item w3-button">
      PRICING
    </a>
    <a href="#contact"onClick={()=>{w3_close()}}  className="w3-bar-item w3-button">
      CONTACT 
    </a>
    <a onClick={()=>{
      logout({token : auth.token })
      .then((response)=>{
        if(response.error){
          alert(JSON.stringify(response))
        }else{
          alert("logging out...................")
          localStorage.clear();
          navigate("/login");

        }
      })
      
    }}  className="w3-bar-item w3-button" style={{backgroundColor:"gray"}}>
      LOGOUT 
    </a>
  </nav>
  
  )
}

export default SideBar