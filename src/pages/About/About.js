import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="About">
      <hr />
      <div className="About-wrapper">
        <p>
          <span>About</span> I'm currently writing my own projects @{" "}
          <a href="https://github.com/ademsuslu" target={"_blank"}>
            Github
          </a>{" "}
          , but I own the copyright for freelance work. When I'm not coding, you
          can catch me mostly exploring, reading, searching for the best action
          or complaining about Turkey's pizza. Being born and raised in Turkey
          will make its size.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero
          expedita eveniet placeat enim modi quam porro ab, aliquam vel.
          Quibusdam perspiciatis cum hic reiciendis quod itaque rem ad
          architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eaque, odit? Placeat veniam ex, omnis nulla corporis distinctio
          dignissimos sequi? Voluptates eaque nobis quis iusto ab porro beatae
          maxime cumque necessitatibus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          impedit explicabo vitae aliquam aut sit nobis exercitationem nisi
          ipsum quasi beatae, asperiores doloremque pariatur ipsa numquam,
          delectus autem earum temporibus?
        </p>
      </div>
      <span className="About-row">
        <a href="#">More</a>
      </span>
    </div>
  );
}
