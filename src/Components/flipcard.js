import React, { Component } from "react";
import "./flipcard.css";

function FlipCard() {
  const style = {
    width: "200px",
    height: "200px"
  };
  return (
    <div class="row">
      <div class="column">
        <div class="row">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="Restaurant.jpg" alt="Avatar" style={style} />
              </div>
              <div class="flip-card-back">
                <h1>Patty Shake</h1>
                <p>Borough: Bronx</p>
                <p>
                  Violation: Live animals other than fish in tank or survice
                  animal pressent in facility's food and/or non-food areas.
                </p>
                <p>Score: 15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
