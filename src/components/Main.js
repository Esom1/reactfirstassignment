import React from "react";
import hero from "../assets/illustration-hero.svg";
import music from "../assets/icon-music.svg";

const Main = () => {
  let changeLink = "https://www.facebook.com";
  return (
    <>
      <header>
        <div className="container">
          <div className="main relate">
            <div className="pic">
              <img src={hero} alt="first pic" />
            </div>
            <div className="structure">
              <h2>Order Summary</h2>
              <p>
                You can now listen to millions of songs, audiobooks and
                podcasts, on any device anywhere you like!
              </p>
            </div>
            <div className="base">
              <div className="icon">
                <img src={music} alt="music icon" />
              </div>
              <div className="price">
                <h4 className="small">
                  Annual Plan <br /> <span className="small">$59.99/Year</span>
                </h4>
              </div>
              <div className="link small">
                <a href={changeLink} className="left" target="_blank">
                  Change
                </a>
              </div>
            </div>
            <form className="form">
              <button type="submit">Proceed to Payment</button>
            </form>
            <div className="end">
              <h4>Cancel Order</h4>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Main;
