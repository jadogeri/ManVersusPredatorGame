import React from 'react'
import { useNavigate } from 'react-router-dom/dist';
import Spacer from '../Spacer';
import { closeModal } from '../../../utils/htmlUtil/closeModal';

const ConfirmationModal = (props) => {
    const navigate = useNavigate();
    return (
    <section className="modal-content animate"  style={{marginTop:290}}>   
        <div className="imgcontainer">      
            <span onClick={()=>closeModal(props.id)} className="close">&times;</span>            
            <img src={require("../../../assets//villainImages/PredatorHome.jpg")} alt="Avatar" className="avatar"/>
        </div>
        <h2>{props.header}</h2>
        <p>{props.message}</p>
        <Spacer marginTop={20}/> 
        <div className="container flex flex-col w-[70%] bg-blue_gray-900 " style={{color:"white"}}>   
        
            <button  type="submit"    onClick={()=>{navigate("/signin")}}>GO TO SIGN IN SCREEN</button>      
        </div>
        <Spacer marginTop={20}/>   
    </section>
  )
}

export default ConfirmationModal

