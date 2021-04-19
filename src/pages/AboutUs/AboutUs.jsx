import React, { Component } from "react";
import "./AboutUs.css";
import "../../App.css";
class AboutUs extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "30px",
        }}
        class="text-center textoutline"
      >
        <p>
          Hello There! My name is Victor and thank you for checking out my World
          of Warcraft Checker.
        </p>
        <p>
          This tool was designed to be my Senior Project at McKendree University
          in Illinois. It was designed to be a one-stop shop experience for
          World of Warcraft players to be able to check on any player's
          progress.
        </p>
        <p>
          I hope that this tool can one day become valuable to the World of
          Warcraft Community!
        </p>
        <p>
          A special thank you to my friends and guild members in Flame-Firetree
          for inspiring this project!
        </p>
      </div>
    );
  }
}
export default AboutUs;
