import React from 'react'
import { openTab } from '../utils/htmlUtil/openTab'
import { w3_open } from '../utils/htmlUtil/w3_open';


const NavBar = () => {
  return (
    <div className="w3-top" >
    <div className="w3-bar w3-white w3-card" id="myNavbar">
      <a href="#home" className="w3-bar-item w3-button w3-wide"
     >
        LOGO
      </a>
      {/* Right-sided navbar links */}

      <div className="w3-right w3-hide-small tab">
      <a href="#game" className="w3-bar-item w3-button tablinks"
       onClick={(event)=>{openTab(event, 'game'); }}>
         <i className="fa fa-gamepad" /> GAME
        </a>
        <a href="#about" className="w3-bar-item w3-button tablinks"
        onClick={(event)=>{openTab(event, 'about');}}>
           <i className="fa fa-regular fa-exclamation" />ABOUT
        </a>
        <a href="#team" className="w3-bar-item w3-button tablinks"
        onClick={(event)=>{openTab(event, 'team');}}>
          <i className="fa fa-user" /> TEAM
        </a>
        <a href="#work" className="w3-bar-item w3-button tablinks"
        onClick={(event)=>{openTab(event, 'work');}}>
          <i className="fa fa-th" /> WORK
        </a>
        <a href="#pricing" className="w3-bar-item w3-button tablinks"
        onClick={(event)=>{openTab(event, 'pricing');}}>
          <i className="fa fa-usd" /> PRICING
        </a>
        <a href="#contact" className="w3-bar-item w3-button tablinks"
        onClick={(event)=>{openTab(event, 'contact');}}>
          <i className="fa fa-envelope" /> CONTACT
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
  )
}

export default NavBar

