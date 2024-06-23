import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="MainImg">
        <div className="MainText">
          {/* Use Link from react-router-dom to navigate */}
          <Link to="/contact" className="mtext">
            contect us if you have any questions
          </Link>
        </div>
        <div className="WelcomTxt">
          <p className="textf">Get Ready To Start A New Adventure With Us</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
