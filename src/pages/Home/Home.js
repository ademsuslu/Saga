import React from "react";
import "./Home.css";
import Frontend from "../../Images/frontend.png";
export default function Home() {
  return (
    <>
      <div id="" className="container">
        <div className="home-row">
          <h1>
            I'm Adem <br />
            I'm Mern Stack developer <br />
            based in Türkey
            <img src={Frontend} className="home-img" alt="Img" />
          </h1>
          {/* <img  src={Frontend} alt="Img" /> */}
        </div>
      </div>
    </>
  );
}
