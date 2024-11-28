import React from 'react'
import SideBar from '../../layouts/SideBar'
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import "./styles.css"
import Credits from '../../views/Credits'
import Work from '../../views/Work'
import Pricing from "../../views/Pricing"
import Game from '../../views/Game'
import About from '../../views/About'
import Team from '../../views/Team'
import Contact from '../../views/Contact'

const DashBoard = () => {
  return (
    <>
    <title>W3.CSS Template</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
   
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    {/* Navbar (sit on top) */}
    <NavBar />
  
    {/* Sidebar on small screens when clicking the menu icon */}
    <SideBar />
    {/* Header with full-height image */}
    <Game />
    {/* About Section */}
    <About />
    {/* Promo Section - "We know design" */}
    {/* <div className="w3-container w3-light-grey" style={{ padding: "128px 16px" }}>
      <div className="w3-row-padding">
        <div className="w3-col m6">
          <h3>We know design.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            tempor incididunt ut labore et dolore.
          </p>
          <p>
            <a href="#work" className="w3-button w3-black">
              <i className="fa fa-th">&nbsp;</i> View Our Works
            </a>
          </p>
        </div>
        <div className="w3-col m6">
          <img
            className="w3-image w3-round-large"
            src="https://www.w3schools.com/w3images/phone_buildings.jpg"
            alt="Buildings"
            width={700}
            height={394}
          />
        </div>
      </div>
    </div> */}
    {/* Team Section */}
    <Team/>
    {/* Promo Section "Statistics" */}
    {/* <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
      <div className="w3-quarter">
        <span className="w3-xxlarge">14+</span>
        <br />
        Partners
      </div>
      <div className="w3-quarter">
        <span className="w3-xxlarge">55+</span>
        <br />
        Projects Done
      </div>
      <div className="w3-quarter">
        <span className="w3-xxlarge">89+</span>
        <br />
        Happy Clients
      </div>
      <div className="w3-quarter">
        <span className="w3-xxlarge">150+</span>
        <br />
        Meetings
      </div>
    </div> */}
    {/* Work Section */}
    <Work />
    {/* Modal for full size images on click*/}

    {/* Skills Section */}
    {/* <div className="w3-container w3-light-grey w3-padding-64">
      <div className="w3-row-padding">
        <div className="w3-col m6">
          <h3>Our Skills.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            tempor incididunt ut labore et dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="w3-col m6">
          <p className="w3-wide">
            <i className="fa fa-camera w3-margin-right" />
            Photography
          </p>
          <div className="w3-grey">
            <div
              className="w3-container w3-dark-grey w3-center"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <p className="w3-wide">
            <i className="fa fa-desktop w3-margin-right" />
            Web Design
          </p>
          <div className="w3-grey">
            <div
              className="w3-container w3-dark-grey w3-center"
              style={{ width: "85%" }}
            >
              85%
            </div>
          </div>
          <p className="w3-wide">
            <i className="fa fa-photo w3-margin-right" />
            Photoshop
          </p>
          <div className="w3-grey">
            <div
              className="w3-container w3-dark-grey w3-center"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Pricing Section */}
    <Pricing />
    {/* Contact Section */}
    <Contact />
    {/* Footer */}
 <Footer />
  </>
  

  )
}

export default DashBoard