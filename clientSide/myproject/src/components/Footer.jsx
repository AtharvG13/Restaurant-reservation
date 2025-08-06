import React from "react";
import { SiCoffeescript } from "react-icons/si";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">ASG</div>
          <div className="right"></div>
          <p>OMKAR NAGAR SQUARE ,NAGPUR MAHARASHTRA</p>
          <p>OPEN 24/7</p>
        </div>
        <div className="banner">
          <div className="left">
            <p>
              Developed by &nbsp;{" "}
              <span>
                {" "}
                <SiCoffeescript />
              </span>{" "}
              &nbsp; and Atharv.
            </p>
          </div>
          <div className="right">
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
