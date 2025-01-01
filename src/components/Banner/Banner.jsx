import React from "react";
import "./styles.css";
import { BiBeenHere } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__content-img">
          <img
            src="
https://i.ibb.co/KbtDGvZ/Whats-App-Image-2025-01-01-at-17-03-46-1.jpg"
            alt="Catalina"
          />
        </div>
        <div className="banner__content-title">
          <h1>Catalina</h1>
          <p>Invitacion a mi cumple!</p>
        </div>
      </div>
      <div className="info">
        <div className="info__content">
          <div className="info__content-data">
            <h3>{<AiOutlineClockCircle />}</h3>
            <p>De 15 a 19hs</p>
          </div>
          <div className="info__content-data">
            <h3>{<AiOutlineCalendar />}</h3>
            <p>09 de Febrero de 2025</p>
          </div>
        </div>
        <div>
          <Link to="https://maps.app.goo.gl/STpVN8qxx6odiQYH7">
            <button>
              {" "}
              <span>
                <BiBeenHere />
              </span>{" "}
              Ir a mi cumple
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
