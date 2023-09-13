import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Opportunities.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useState,useEffect } from "react";

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': '874c3d53ebmsh7f32a75d8046d27p173ca6jsn9efc84678dc5',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

export default function Opportunities() {
  const [jobSearch, setJobSearch] = useState("");
  useEffect(() => {
    axios
      .request(options)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <div className="image-container">
              <img src="./Images/award.jpg" alt="jobs" />
            </div>
            <div className="text-container">
              <div className="slide-text">
                Your journey to success begins with the first step - searching
                for the right job in the diverse and dynamic landscape of India
              </div>
              <a
                href="https://www.accenture.com/in-en/careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search Jobs Opportunities in India
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="image-container">
              <img src="./Images/award2.jpg" alt="hero" />
            </div>
            <div className="text-container">
              <div className="slide-text">
                Embrace the opportunity of education with open arms, for in the
                realm of all upcoming scholarships, your potential finds its
                wings to soar.
              </div>
              <a
                href="https://www.buddy4study.com/upcoming-scholarships/all-india"
                target="_blank"
                rel="noopener noreferrer"
              >
                All Upcoming ScholarShips
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="image-container">
              <img src="./Images/award3.jpg" alt="mission" />
            </div>
            <div className="text-container">
              <div className="slide-text">
                Stay curious, stay informed. In the realm of education,
                important news is the compass that guides students toward their
                destination of knowledge and growth.
              </div>
              <a
                href="https://www.indiatoday.in/education-today"
                target="_blank"
                rel="noopener noreferrer"
              >
                Important News For Students
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
