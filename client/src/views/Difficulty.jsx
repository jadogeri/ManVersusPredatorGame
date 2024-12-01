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
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowRadius: 20

  }}className="text"> 
    <ImageDetail points={gameLevel.easy} imageSource={require('../assets/icons/easy.png')} levelHandler={() => { setDifficulty({ value: gameLevel.easy }) }}/>
      <ImageDetail points={gameLevel.medium} imageSource={require('../assets/icons/medium.png')} levelHandler={() => { setDifficulty({ value: gameLevel.medium }) }}/>
      <ImageDetail points={gameLevel.hard} imageSource={require('../assets/icons/hard.png')} levelHandler={() => { setDifficulty({ value: gameLevel.hard }) }}/>

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
    )
}


export default Difficulty;

/**
 * 
 * 
 * 
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const GameDifficultyScreen = function (props) {

    const EASY = 250;
    const MEDIUM = 200;
    const HARD = 150;

    const gameLevel = {
        easy: EASY,
        medium: MEDIUM,
        hard: HARD
    }

    const [level, setDifficulty] = useState({ value: 0 })

    return <View style={{ backgroundColor: 'yellow', flex: 1 }}>

        <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }} >

            <Text style={style.text}> GAME DIFFICULTY</Text>

            <ImageDetail points={gameLevel.easy} imageSource={require('../../assets/icons/easy.png')} levelHandler={() => { setDifficulty({ value: gameLevel.easy }) }} />
            <ImageDetail points={gameLevel.medium} imageSource={require('../../assets/icons/medium.png')} levelHandler={() => { setDifficulty({ value: gameLevel.medium }) }} />
            <ImageDetail points={gameLevel.hard} imageSource={require('../../assets/icons/hard.png')} levelHandler={() => { setDifficulty({ value: gameLevel.hard }) }} />
            <Text style={{ backgroundColor: 'black' }}> {level.value} </Text>


            <Button title={level.value === 0 ? "CHOOSE DIFFICULTY" : "ENTER GAME"}
                onPress={level.value > 0 ? () => { props.navigation.navigate("character", level) } : () => { }} />


        </View>
        <View style={{ flex: 0.10, backgroundColor: 'black' }}>

        </View>


    </View>

};

const style = StyleSheet.create({

    text: {


        fontSize: 70,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: 'center',
        textShadowColor: 'green',
        textShadowRadius: 20,
    }
});

const image = StyleSheet.create({

    imageStyle: {

        fontStyle: 'italic'

    }

});

export default GameDifficultyScreen;
 */