import React from 'react'

const Game = () => {
  return (
    <header className="bgimg w3-display-container w3-grayscale-min tabcontent" id="game"
 
    >
          <img src="https://www.w3schools.com/w3images/mac.jpg" alt="" style={{zIndex :"-1",flex:1}} />

      <div className="w3-display-left w3-text-white" style={{ padding: 48 }}>
        <span className="w3-jumbo w3-hide-small">
          Start something that matters
        </span>
        <br />
        <span className="w3-xxlarge w3-hide-large w3-hide-medium">
          Start something that matters
        </span>
        <br />
        <span className="w3-large">
          Stop wasting valuable time with projects that just isn't you.
        </span>
        <p>
          <a
            href="#about"
            className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
          >
            Learn more and start today
          </a>
        </p>
      </div>
      <div
        className="w3-display-bottomleft w3-text-grey w3-large"
        style={{ padding: "24px 48px" }}
      >
        <i className="fa fa-facebook-official w3-hover-opacity" />
        <i className="fa fa-instagram w3-hover-opacity" />
        <i className="fa fa-snapchat w3-hover-opacity" />
        <i className="fa fa-pinterest-p w3-hover-opacity" />
        <i className="fa fa-twitter w3-hover-opacity" />
        <i className="fa fa-linkedin w3-hover-opacity" />
      </div>
    </header>
  )
}

export default Game