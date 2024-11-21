
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { closeModal } from '../../utils/htmlUtil/closeModal';


const ResetPasswordModal = (props) => {
    const navigate = useNavigate();
  return (
    <div id="resetPassword" className="modal">
  
  <form className="modal-content animate" >
    <div className="imgcontainer">
    <span onClick={()=>closeModal(props.id)} className="close" style={{color:"red",fontSize:30,alignSelf:"center",justifyContent:"center", cursor:"pointer"}}>&times;</span>            

      <img src={require("../../assets/logo.jpg")} alt="Avatar" className="avatar" style={{height :200,width:200}}/>
    </div>
    <h2>Password Change </h2>
    <p>Successful , password has been changed
    </p>

    <div className="container">       
        
      <button type="submit"    onClick={()=>{navigate("/login")}}>GO TO SIGN IN SCREEN</button>
   
    </div>


  </form>
</div> 
  )
}

export default ResetPasswordModal

