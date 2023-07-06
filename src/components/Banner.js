import React from "react";
import logo from "../assets/logo.png";

const Banner = () => {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="logo" className="lmj-logo" />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
