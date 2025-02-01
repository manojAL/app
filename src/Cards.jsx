import React from "react";
import Slider from "react-slick";
import "./Cards.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const data = [
  {
      Path: "/images/coding_competition.jpg", // Replace with actual image paths
      EventName: "Coding Competition",
      Category: "Coding & Software Development",
      Date: "2024-10-27",
      Registrations: 120,
  },
  {
      Path: "/images/web_dev_workshop.jpg",
      EventName: "Web Dev Workshop",
      Category: "Coding & Software Development",
      Date: "2024-11-03",
      Registrations: 90,
  },
  {
      Path: "/images/ethical_hacking.jpg",
      EventName: "Ethical Hacking Intro",
      Category: "Cybersecurity",
      Date: "2024-11-17",
      Registrations: 75,
  },
  {
      Path: "/images/machine_learning.jpg",
      EventName: "Machine Learning Basics",
      Category: "AI & Machine Learning",
      Date: "2024-12-08",
      Registrations: 100,
  },
  {
      Path: "/images/robotics_challenge.jpg",
      EventName: "Robotics Challenge",
      Category: "Robotics & Hardware",
      Date: "2025-01-12",
      Registrations: 60,
  },
  {
      Path: "/images/git_workshop.png",
      EventName: "Git Version Control",
      Category: "Coding & Software Development",
      Date: "2025-01-26",
      Registrations: 85,
  },
  {
      Path: "/images/ctf_competition.jpg",
      EventName: "Capture the Flag",
      Category: "Cybersecurity",
      Date: "2025-02-09",
      Registrations: 50,
  },
  {
      Path: "/images/ai_project_showcase.jpg",
      EventName: "AI Project Showcase",
      Category: "AI & Machine Learning",
      Date: "2025-02-23",
      Registrations: 70,
  },
  {
      Path: "/images/arduino_workshop.png",
      EventName: "Arduino Workshop",
      Category: "Robotics & Hardware",
      Date: "2025-03-08",
      Registrations: 95,
  },
];

// ... (rest of your component code remains the same)

function Cards() {
  const CustomPrevArrow = (props) => {
    return (
      <div {...props} className="slick-prev custom-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    return (
      <div {...props} className="slick-next custom-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </div>
    );
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  

  return (
    <div className="slider">
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="img">
              <img
                src={item.Path}
                alt="https://via.placeholder.com/150"
                loading="lazy"
              />
            </div>
            <div className="content">
            <div className="EventName">{item.EventName}</div>
            <div className="Category">{item.Category}</div>
            <div className="Date">{item.Date}</div>
            <div className="Registrations">Registrations: {item.Registrations}</div>
            </div>
            <div className="button"><button>JOIN</button></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cards;
