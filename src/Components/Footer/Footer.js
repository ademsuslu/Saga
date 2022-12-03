import React from "react";
import "./Footer.css";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
export default function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-row">
        <div className="col-1">
          <h3>LIKE BEIGN FIRST ?</h3>
          <form>
            <div className="form-control">
              <input type="text" placeholder="Enter Your Email" />
              <button>Send</button>
            </div>
          </form>
          <div className="store">
            <h3>Our Stores</h3>
            <p>Store Locator</p>
          </div>
          <div className="brand">
            <h3>Our Brands</h3>
            <p>Madewell</p>
          </div>
        </div>
        <div className="col-2">
          <h3>Get to know us</h3>
          <div className="social">
            <a
              href="https://twitter.com/@suslu7616"
              target="_blank"
              className="social-item"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              className="social-item"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://google.com/"
              target="_blank"
              className="social-item"
            >
              <AiFillGoogleCircle />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="social-item"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="brand">SHIP TO: Turkey | CHANEGE </div>
          <div className="brand">
            <h3>Our Brands</h3>
            <span>&copy; 2022 Adem Süslü</span>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              marginTop: "5px",
            }}
          >
            <a
              href="#"
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                padding: "15px",
                borderRadius: "16px",
                color: "blue",
              }}
            >
              <AiOutlineArrowUp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
