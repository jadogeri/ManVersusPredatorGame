import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { openTab } from "../utils/htmlUtil/openTab";
import { motion } from "framer-motion";
import ImageDetail from "../components/ImageDetail"

const Difficulty = (props)  =>{
  const [level, setDifficulty] = useState({ value: 0 })

  const EASY = 250;
  const MEDIUM = 200;
  const HARD = 150;

  const gameLevel = {
      easy: EASY,
      medium: MEDIUM,
      hard: HARD
  }

    return (
      <>
      {/**
        <div style={{ backgroundColor: 'black', flex: 1 }} id="difficulty"
         className="w3-container tabcontent"
        >

    <div style={{ flex: 3 }} >

      <p style={  {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }} className="text"> GAME DIFFICULTY </p>
    
      <p style={  {
    //fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }}className="w3-row-padding w3-center text" > 
    <ImageDetail points={gameLevel.easy} className="w3-margin-bottom w3-jumbo"
    imageSource={require('../assets/icons/easy.png')} levelHandler={() => { setDifficulty({ value: gameLevel.easy }) }}/>
      <ImageDetail points={gameLevel.medium} className="w3-margin-bottom w3-jumbo"
       imageSource={require('../assets/icons/medium.png')} levelHandler={() => { setDifficulty({ value: gameLevel.medium }) }}/>
      <ImageDetail points={gameLevel.hard} className="w3-margin-bottom w3-jumbo"
      imageSource={require('../assets/icons/hard.png')} levelHandler={() => { setDifficulty({ value: gameLevel.hard }) }}/>

      </p>
    


      <img className="icon"
        style={{
          height: 150,
          marginTop: 30,
          alignSelf:"center"
        }}
        src={require('../assets/villainImages/PredatorHome.jpg')} />

    </div>

    <div className="button"style={{ flex: 1.25, alignItems: 'center' }}>
      <div onClick={(event) => {openTab(event, 'character'); //navigate("login")

       }}>
        <img src={require('../assets/icons/playnow.jpg')}  style={{height:100,width:200,alignContent:"center",justifyContent:"center",position:""}}/>
      </div>
    </div>

  </div>

*/}

  <div className="w3-container w3-center " style={{ padding: "128px 16px" }} id="difficulty">
    <h3 className="w3-center">ABOUT THE COMPANY</h3>
    <p className="w3-center w3-large">Key features of our company</p>
    
    <div style={{alignItems:"center",alignContent:"center",justifyItems:"center",display:"flex",justifyContent:"space-between"}}>
    <div className="w3-center" 
    style={{ marginTop: 64,justifyContent:"space-between",height:500,backgroundColor:"red",
             
     }}>
      <div className="w3-quarter">
        <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
        <p className="w3-large">Responsive</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Passion</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-diamond w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Design</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
 
    </div>
    </div>
  </div>
  </>
    )
}


export default Difficulty;


