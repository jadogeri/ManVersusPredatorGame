import React, {useState} from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../configs/axios";

const Home = (props)  =>{
  const [data, setData] = useState("")
    const navigate = useNavigate();

    const getData = async () =>{
      const response = await api.get("./test/hello/")
      
      setData(JSON.stringify(response))
    }
    return (
        <div style={{ backgroundColor: 'black', flex: 1 }}>

    <div style={{ flex: 3 }} >

      <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }} className="text"> TEST</p>
     
      <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }}className="text">API DATA === {data}
      </p>
      <img className="icon"
        style={{
          height: 150,
          marginTop: 30,
          alignSelf:"center"
        }}
        src={require('../../assets/villainImages/PredatorHome.jpg')} />

    </div>

    <div className="button"style={{ flex: 1.25, alignItems: 'center' }}>
      <div onClick={() => {alert("pressed"); getData()}}>
        <img src={require('../../assets/icons/start.jpg')}  />
      </div>
    </div>

  </div>
    )
}


export default Home;