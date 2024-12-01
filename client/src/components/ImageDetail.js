import React from "react";

const ImageDetail = (props) =>{

    console.log(props);

    return  <div style={{flex:2,flexDirection:"row", alignItems:'center'}}>
            <div onClick={props.levelHandler}>                 

                <img style = {imageStyle.style} src={props.imageSource} />
                               
            </div> 

            <h4 style={{backgroundColor:'black',color: 'green'}}> {props.points} points</h4>


            </div>

                
           
};

const style1 = {

    text: {
        fontSize: 30,
        fontStyle:"italic",
        fontWeight :"bold",
        textAlign: 'center',
        textShadowColor : 'white'
        
    }
};

const imageStyle = {

    style:{       

    }
};

export default ImageDetail;