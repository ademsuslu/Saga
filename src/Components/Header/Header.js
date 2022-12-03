import React from "react";
import "./Header.css";
import { slide as Menu } from "react-burger-menu";

export default function Header() {
  return (
    <>
      <div>
        <Menu>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li className="Projetcs" style={{ display: "inline-block" }}>
            <a href="#Projects">Projects</a>
            <div className="Projects-badge">4</div>
          </li>
          <li>
            <a href="#Contacts">Contact</a>
          </li>
        </Menu>
        <a href={"#"} className="Mobile">
          <h1>Saga</h1>
        </a>
      </div>

      <div className="header-container">
        <div className="header-row">
          <div className="logo">
            <a href={"#"}>
              <h1>Saga</h1>
            </a>
          </div>
          <div className="header-frontend">frontend ______</div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li className="Projetcs">
              <a href="#Projects">Projects</a>
              <div className="Projects-badge">4</div>
            </li>
            <li>
              <a href="#Contacts">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
