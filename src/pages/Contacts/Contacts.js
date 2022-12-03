import React from "react";
import "./Contacts.css";
import {
  AiFillPhone,
  AiFillTwitterCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
export default function Contacts() {
  return (
    <>
      <hr />
      <div id="Contacts" className="contacts-wrapper">
        <div className="contact-row">
          <h3 className="contact-ıtem">Contact</h3>
          <div className="contact-ıtem">
            <AiFillTwitterCircle />
            <h4>@suslu7616</h4>
          </div>
          <div className="contact-ıtem">
            <AiFillPhone />
            <h4>+123 12 123</h4>
          </div>
          <div className="contact-ıtem">
            <AiOutlineInfoCircle />
            <h4>help@gmail.com</h4>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
