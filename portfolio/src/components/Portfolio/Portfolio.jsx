import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import picture4 from "../../img/picture4.PNG";
import picture3 from "../../img/picture3.PNG";
import HOC from "../../img/hoc.png";
import Game from "../../img/tic-tac-toe.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="slider-slide">
            <a
              href="https://github.com/yesitha/ProcurementManagementSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture4} alt="" />
            </a>
            <br/>
            <div className="slider-text">
              <h3>Procurement Management System</h3>
              A software solution that helps organizations streamline and
              automate the process of purchasing goods, from the requisition of
              items to the payment to vendors, ensuring efficient procurement
              operations. This process also includes the selection of vendors
              and the filtering of appropriate items and services required by an
              organization.<br/> Role: Team Member|Full-Stack Developer
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <a
              href="https://github.com/yesitha/Smart-Ventilator"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture3} alt="" />
            </a>
            <br />
            <div className="slider-text"><h3>Smart Ventilator System</h3>
              A smart ventilator system that automates the supply of oxygen to
              patients with minimum professional attention. The oxygen supply is
              automated depending on whether the patient’s blood oxygen level is
              sufficient. Sensors measure the patient’s vital information, and
              solenoid valves control the oxygen supply when required. <br />
              Role: Group Leader|Programmer
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <a
              href="https://github.com/shakila2030/Game-Zone"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={Game} alt="" />
            </a>
            <div className="slider-text"><br /><h3>Game Zone</h3>Multiple games in one place
            A gaming software with accessibility features for visually impaired people that includes a variety of casual games, 
            including tic-tac-toe, jump and dash, memory game and falling ball game</div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
