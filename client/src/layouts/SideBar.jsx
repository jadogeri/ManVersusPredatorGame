import React from 'react'
import { w3_close } from '../utils/htmlUtil/w3_close'
import { useLogoutMutation } from '../redux/api/user'
import { useNavigate } from 'react-router-dom'
import { openTab } from '../utils/htmlUtil/openTab'
import { w3_open } from '../utils/htmlUtil/w3_open';

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
      onClick={()=>{w3_close()

      }}
      className="w3-bar-item w3-button w3-large w3-padding-16 "
    >
      Close ×
    </a>
    <a href="#game"   onClick={(event)=>{//w3_close(); 
       openTab(event, 'game');}}  className="w3-bar-item w3-button tablinks">
      GAME
    </a>

    <a href="#about"   onClick={(event)=>{//w3_close(); 
       openTab(event, 'about');}}  className="w3-bar-item w3-button tablinks">
      ABOUT 
    </a>
    <a href="#team" onClick={(event)=>{//w3_close(); 
       openTab(event, 'team');}}  className="w3-bar-item w3-button tablinks">
      TEAM
    </a>
    <a href="#work" onClick={(event)=>{//w3_close(); 
       openTab(event, 'work');}}  className="w3-bar-item w3-button tablinks">
      WORK
    </a>
    <a href="#pricing" onClick={(event)=>{//w3_close();  
      openTab(event, 'pricing');}}  className="w3-bar-item w3-button tablinks">
      PRICING
    </a>
    <a href="#contact" onClick={(event)=>{//w3_close(); 
       openTab(event, 'contact');}}  className="w3-bar-item w3-button tablinks">
      CONTACT 
    </a>
    <a onClick={()=>{
      logout({token : auth.token })
      .then((response)=>{
        if(response.error){
          alert(JSON.stringify(response))
        }else{
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