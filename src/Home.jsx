import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import homeimage from "../images/homeimage.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import { useEffect } from "react";
import AOS from "aos";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";
function redirectToLink() {
  window.open(
    "https://drive.google.com/file/d/1CRa4ED6XYN38ob9EHBsZ510rCcvQVCn2/view?usp=drivesdk "
  );
}

export const Home = () => {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="hi" data-aos="fade-down" data-aos-delay="1050">
            Hi  There! 👋, 
          </span>
          <span className="myname" data-aos="fade-right" data-aos-delay="450">
             <span className="my-name">I'M</span> DINESHPANDI
          </span>
          <span className="role" data-aos="fade-up" data-aos-delay="1000">
            Full stack developer
          </span>
          <Button onClick={redirectToLink} id="i-btn" variant="outlined">
            Resume
          </Button>
          <div className="i-icons">
            <div onClick={() => window.open("https://github.com/Dineshpandi1320")}>
              <img src={github} />
              <p>Dinesh</p>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/dineshpandi-d-527739268/"
                )
              }
            >
              <img src={linkedin} />
              <p>Dineshpandi D</p>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img className="floating-image" src={homeimage} alt="teamwork" />
      </div>
    </div>
  );
};
