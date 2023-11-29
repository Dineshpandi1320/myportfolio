import * as React from "react";
import { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";

export const About = () => {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="about-container">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        About Me
      </h1>
      <p data-aos="fade-up" data-aos-duration="1500">
        As a fresh graduate with a passion for web development, I am excited to
        start my career as a FullStack Developer. I have a strong foundation in
        <span> HTML, CSS, and JavaScript,</span> as well as proficiency in
        <span className="courses"> React, Node, Express and MongoDB</span>. I am
        knowledgeable in both Frontend and Backend development
      </p>
    </div>
  );
};
