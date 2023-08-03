import React from "react";

import logo from "../images/logo.png";

import Button from "../components/Button/Button";

const Homeview = ({ startGame }) => {
  return (
    <div className="container">
      <figure className="logoContainer">
        <img src={logo} alt="logo" />
      </figure>

      <div className="btn">
        <Button clickHandler={startGame}>Start Game</Button>
      </div>
    </div>
  );
};

export default Homeview;
