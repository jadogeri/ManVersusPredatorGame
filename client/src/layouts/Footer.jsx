import React from 'react'
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
  return (
    <footer className="w3-center w3-black w3-padding-20" >
    {/* <a  className="w3-button w3-light-grey">
      <i className="fa fa-arrow-up w3-margin-right" />
      To the top
    </a> */}
    <ScrollToTop smooth className="w3-button w3-light-green flex" title='To the top' style={{width:75,height:40,color:"green"}}>
 
    </ScrollToTop>
    <div className="w3-xlarge w3-section">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
    </div>
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </a>
    </p>
  </footer>
  )
}

export default Footer