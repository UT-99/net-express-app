import React from "react";
import "../Styles/Home.css";
import PlayCircleFilledWhiteSharpIcon from "@mui/icons-material/PlayCircleFilledWhiteSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SwipeRightAltSharpIcon from "@mui/icons-material/SwipeRightAltSharp";
import CellTowerSharpIcon from "@mui/icons-material/CellTowerSharp";
import WifiTetheringSharpIcon from "@mui/icons-material/WifiTetheringSharp";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";

import ForumSharpIcon from "@mui/icons-material/ForumSharp";

const Home = () => {
  return (
    <>
      <br />
      <div className="text_align">
        <br />

        <h1 className="font_decoration">Switch to Internet Services</h1>
        <h2 className="font_decoration">
          In Your <span id="Region">Region</span>
        </h2>
        <p id="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum omnis
          consequuntur veritatis sapiente sequi autem architecto vero eveniet.
        </p>
        <h5 id="PlayButton">
          <PlayCircleFilledWhiteSharpIcon />
        </h5>
        <br />
        <div className="flex_container">
          <div className="flex_items_left">
            <h2>NextBit Limited</h2>
            <h2>Possibilities</h2>
          </div>
          <div className="flex_items_right">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              omnis consequuntur veritatis
            </span>{" "}
          </div>
        </div>
        <br />
        <br />

        <div className="flex_container_cards">
          <div className="firstCard">
            <br />
            <div className="iconForCard">
              <HomeSharpIcon />
            </div>
            <h3>Home Internet</h3>
            <ul className="UnorderList">
              <li>Bufferless Treaming</li>
              <li>Long Play Gaming </li>
              <li>Real IP Included</li>
              <li>Stable connection with no</li>
              <li>Intereption </li>
            </ul>
            <div className="display">
              <div className="arrow_direction">
                <SwipeRightAltSharpIcon />
              </div>
              <div className="centerForItem">Explore More </div>
            </div>
          </div>

          <div className="secondCard">
            <br />
            <div className="iconForCard">
              <CellTowerSharpIcon />
            </div>
            <h3>Coorporate Internet</h3>
            <ul className="UnorderList">
              <li>Bufferless Treaming</li>
              <li>Long Play Gaming </li>
              <li>Real IP Included</li>
              <li>Stable connection with no</li>
              <li>Intereption </li>
            </ul>
            <div className="display">
              <div className="arrow_direction">
                <SwipeRightAltSharpIcon />
              </div>
              <div className="centerForItem">Explore More </div>
            </div>
          </div>

          <div className="thirdCard">
            <br />
            <div className="iconForCard">
              <WifiTetheringSharpIcon />
            </div>
            <h3>Data Connectivity</h3>
            <ul className="UnorderList">
              <li>Bufferless Treaming</li>
              <li>Long Play Gaming </li>
              <li>Real IP Included</li>
              <li>Stable connection with no</li>
              <li>Intereption </li>
            </ul>
            <div className="display">
              <div className="arrow_direction">
                <SwipeRightAltSharpIcon />
              </div>
              <div className="centerForItem">Explore More </div>
            </div>
          </div>
        </div>

        <br />

        <div className="display headingBGColor">
          <div className="color headingWidth">
            <h3>Let's Find Deals and Services </h3>
            <h3>Available in Area. </h3>
          </div>
          <div className="centerForItemInput inputWidth">
            <input
              className="width inputBackground"
              type="text"
              placeholder="Type your email......"
            />
            <button className="width background">Check Availability</button>
          </div>
        </div>
        <br />
        <div className="display2">
          <div className="teamPicture">
            <div></div>
          </div>

          <div className="RandomText">
            <h2 style={{ textAlign: "start" }}>Fast high speed broadband.</h2>
            <h2 style={{ textAlign: "start" }}>Internet Connection </h2>
            <p style={{ textAlign: "start", fontSize: "0.78em" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              omnis consequuntur veritatis sapiente sequi autem architecto vero
              eveniet.
            </p>

            <p style={{ textAlign: "start", fontSize: "0.78em" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              omnis consequuntur .
            </p>

            <div className="display3">

              <div className="display3_1">
                <div className="clients">
                  <SignalCellularAltSharpIcon />
                </div>
                <div className="display4">
                  <p>265K +</p>
                  <p>Client Connections </p>
                </div>
              </div>

              <div className="display3.1">
                <div className="connectionInWorld">
                  <ForumSharpIcon />
                </div>
                <div className="display4">
                  <p>265K +</p>
                  <p>Client Connections </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
