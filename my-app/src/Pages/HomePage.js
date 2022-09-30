import React from "react";
import { Link } from "react-router-dom"



import Gopher from "../images/Gopher.png";
import Driver from "../images/Driver.png";
import MidRange from "../images/MidRange.png";
import Putter from "../images/Putter.png";



export default function HomePage() {
  return (
    <div className="pageContent">
      <div className="section-bg-armyGreen">
        <h1 className="section-title"> DiscGopher</h1>
        
        
        <p className="section-content">
          DiscGopher helps beginners be better Disc Golfers
        </p>
        <div className="section-image">
          <img className="image" src={Gopher}></img>
        </div>
      </div>
      <div className="section-bg-armyGreen">
        <h1 className="section-title"> The Equipment </h1>
        <p className="section-content">ipsum lorem</p>
        <div className="flex-container">
          <div className="child-container">
            <img className="image" src={Putter} alt="Stock image of a putter"></img>
            <h3>Putter</h3>
            <Link className={"link"} to="/Putter"> More Info</Link>
          </div>
          <div className="child-container">
            <img className="image" src={MidRange} alt="Stock image of a MidRange"></img>
            <h3>Mid-Range</h3>
            <Link className={"link"} to="/MidRange"> More Info</Link>
          </div>
          <div className="child-container">
            <img className="image" src={Driver} alt="Stock image of a driver"></img>
            <h3>Driver</h3>
            <Link className={"link"} to="/Driver"> More Info</Link>
          </div>
        </div>
      </div>
      <div className="section-bg-armyGreen">
        <h1 className="section-title"> Throwing Style </h1>
        <div className="flex-container">

        <div className="child-container">
          <img src="https://picsum.photos/200/300" alt="Stock image of a Forehand grip"></img>
          <h3>Forehand</h3>
          <Link className={"link"} to="/Forehand"> More Info</Link>
        </div>
        <div className="child-container">
          <img src="https://picsum.photos/200/300" alt="Stock image of a Backhand grip"></img>
          <h3>Backhand</h3>
          <Link className={"link"} to="/Backhand"> More Info</Link>
        </div>
        <div className="child-container">
          <img src="https://picsum.photos/200/300" alt="Stock image of a Tomahawk / Thumber grip"></img>
          <h3>Tomahawk / Thumber</h3>
          <Link className={"link"} to="/Tomahawk"> More Info</Link>
        </div>

        </div>
      </div>
      <div className="section-bg-armyGreen">
        <h1 className="section-title"> Scoring </h1>
        <p className="section-content">for the most part, the socring terms for disc golf are the same as they are for ball golf.</p>
        <Link className={"link"} to="/Scoring"> More Info</Link>
      </div>
    </div>
  );
}
