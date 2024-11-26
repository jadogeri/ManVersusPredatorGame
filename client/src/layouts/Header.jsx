import React from 'react'

const Header = ({auth}) => {
    //let auth = localStorage.getItem("AUTHKEY")
  return (
    auth?<p style={{color:"red",fontSize:100}}>Header</p>:<></>
  )
}

export default Header