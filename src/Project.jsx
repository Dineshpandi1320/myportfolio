import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import chatapp from "../images/chatapp.png"
import stackoverflow from "../images/stackoverflow.png"
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./project.css";
import { useEffect } from "react";
import AOS from "aos";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";


export function Project() {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = [
    {
      id: "clone-app",
      title: "Stack overflow clone",
      imgSrc: stackoverflow,
      frontEndSource: "https://github.com/Dineshpandi1320/Stackoverflow",
      live: "https://thriving-nougat-4bf5bd.netlify.app/",
      backEndSource: "https://github.com/Dineshpandi1320/Stackoverflow-backend",
      techStack: "Reactjs, NodeJs, Express, MongoDb",
    },
    {
      id: "chat-app",
      title: " Interactive one on one chat with socket.io",
      imgSrc: chatapp,
      frontEndSource: "https://github.com/Dineshpandi1320/chat-app-frontend",
      live: "https://genuine-kringle-8bfe0a.netlify.app/",
      backEndSource: "https://github.com/Dineshpandi1320/chat-app-backend",
      techStack: "Reactjs, NodeJs, Express, socket.io",
    },
   
  ];

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div style={{ backgroundColor: styles }} className="project-main-container">
      <h1 data-aos="fade-down" data-aos-delay="500">
        Project
      </h1>
      <p data-aos="fade-up" data-aos-delay="500">
        The login credentials are already filled in the text field by default.
      </p>
      <div className="mySwiper">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imgSrc} alt={`Project ${project.id}`} />
            <h2 style={{ color: "violet" }}>{project.title}</h2>
            <h4 style={{ textAlign: "center" }}>
              Tech stack :{project.techStack}
            </h4>
            <div className="slider-buttons">
              <button variant="contained" color="error" onClick={() => openLink(project.frontEndSource)}>
                Front End Source
              </button>
              <button onClick={() => openLink(project.live)}>Live</button>
              {project.backEndSource ? (
                <button variant="outlined" color="error" onClick={() => openLink(project.backEndSource)}>
                  Back End Source
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
