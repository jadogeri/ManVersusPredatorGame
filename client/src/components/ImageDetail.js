import React from "react";

const ImageDetail = (props) =>{

    console.log(props);

    return  <><div //style={{flex:2,flexDirection:"row", alignItems:'center'}}
     className="w3-bar-item">
            <div  >                 

                <img style = {imageStyle.style} src={props.imageSource} onClick={props.levelHandler} />
                
                               
            </div> 

            <h4 style={{backgroundColor:'black',color: 'green'}}> {props.points} points</h4>


            </div>
            <div className="w3-quarter">
        <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
        <img className={props.className}style = {imageStyle.style} src={props.imageSource} onClick={props.levelHandler} />

      </div>

            </>    
           
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
       cursor:"pointer",

    }
};

export default ImageDetail;