import React from "react";

import Profile from "../../../../static/assets/images/Sjonathan.png";
export default function () {
  return (
    <div className="about-content-m">
      <div className="about-wrapper-m">
        <div className="about-img-wrapper-m">
          <img
            src={Profile}
            alt="placeholder"
            className="about-img-m"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="about-p-m">
          We offer a fresh, new approach to connecting our business partners
          with great employees. We love finding the perfect match between
          talented individuals and our remarkable clients.
          <br />
          <br />
          We believe recruiting and staffing is more than just a numbers game.
          It’s about people – our business clients, job seekers, and our team
          members. We take the time to truly understand what you need and how
          you want to develop your company or your career. We are passionate
          about making a positive, meaningful difference in your lives and in
          our communities.
          <br />
          <br />
          We love what we do, work hard, and always make sure we remain true to
          our CORE VALUES:
          <ul>
            <li>BEING CURIOUSLY CREATIVE</li>
            <li>RELENTLESS COMMITMENT</li>
            <li>BEING RELIABLE</li>
            <li>BEING OUR BEST SELVES</li>
            <li>FINDING THE PLAY IN OUR DAY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
