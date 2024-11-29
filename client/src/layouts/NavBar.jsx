import React from 'react'
import { openTab } from '../utils/htmlUtil/openTab'
import { w3_open } from '../utils/htmlUtil/w3_open';


const NavBar = () => {
  return (
    <div style={{backgroundColor :"black"}} >
    <div className="w3-top" style={{backgroundColor :"black"}}>
    <div className="w3-bar w3-black w3-card" id="myNavbar" style={{backgroundColor :"black"}}>
    {/* <img className="w3-bar w3-black w3-card"
    style={{backgroundColor :"green",width:100,height:200}} src={require("../assets/villainImages/PredatorHome.jpg")}/> */}

      <a href="#home" className="w3-bar-item w3-button w3-wide" style={{backgroundColor :"red"}}
     >
        {/* <img src={require("../assets/villainImages/PredatorHome.jpg")} className="w3-bar-item w3-button w3-wide"  alt="logo"  /> */}
        logo
      </a>
      {/* Right-sided navbar links */}
      <div className="w3-right w3-hide-small tab" style={{backgroundColor :"black"}}>
      <a href="#game" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
       onClick={(event)=>{openTab(event, 'game'); }}>
         <i className="fa fa-gamepad" style={{backgroundColor :"green"}}/> GAME
        </a>
        <a href="#about" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'about');}}>
           <i className="fa fa-regular fa-exclamation" style={{backgroundColor :"green"}}/>ABOUT
        </a>
        <a href="#team" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'team');}}>
          <i className="fa fa-user" style={{backgroundColor :"green"}}/> TEAM
        </a>
        <a href="#work" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'work');}}>
          <i className="fa fa-th" style={{backgroundColor :"green"}}/> WORK
        </a>
        <a href="#pricing" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'pricing');}}>
          <i className="fa fa-usd" style={{backgroundColor :"green"}}/> PRICING
        </a>
        <a href="#contact" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        onClick={(event)=>{openTab(event, 'contact');}}>
          <i className="fa fa-envelope" style={{backgroundColor :"green"}} /> CONTACT
        </a>
      </div>
      {/* Hide right-floated links on small screens and replace them with a menu icon */}
      <a
        //href="javascript:void(0)"
        className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
        onClick={()=>{w3_open()}}
      >
        <i className="fa fa-bars" />
      </a>
    </div>
  </div>
  </div>
  )
}

export default NavBar

