import React from "react";
import "./Projects.css";
import VideoOne from "../../videos/ProjectsOne.mp4";

export default function Projects() {
  return (
    <>
      <hr />
      <div className="Projects-container" id="Projects">
        <div className="Projects-row">
          <div className="ınfo">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <div className="video-wrapper">
            <video autoPlay muted loop src={VideoOne} />
            <div className="video-ınfo">
              <h3>Javscript</h3>
              <div className="btns">
                <button>Web Development</button>
                <button>Web Pentest</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Projects-row">
          <div className="video-wrapper">
            <video autoPlay muted loop src={VideoOne} />
            <div className="video-ınfo">
              <h3>Javscript</h3>
              <div className="btns">
                <button>Web Development</button>
                <button>Web Pentest</button>
              </div>
            </div>
          </div>
          <div className="ınfo">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
        </div>
        <div className="Projects-row">
          <div className="ınfo">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <div className="video-wrapper">
            <video autoPlay muted loop src={VideoOne} />
            <div className="video-ınfo">
              <h3>Javscript</h3>
              <div className="btns">
                <button>Web Development</button>
                <button>Web Pentest</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Projects-row">
          <div className="video-wrapper">
            <video autoPlay muted loop src={VideoOne} />
            <div className="video-ınfo">
              <h3>Javscript</h3>
              <div className="btns">
                <button>Web Development</button>
                <button>Web Pentest</button>
              </div>
            </div>
          </div>
          <div className="ınfo">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
