import React from "react";
import Slider from "react-slick";
import "./Cards.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    Initiation: "Providing clean water",
    NGO_involved: "Charity: Water",
    Location: "Addis Ababa",
    People_registered: 250,
  },
  {
    Initiation: "Distributing food supplies",
    NGO_involved: "Feeding America",
    Location: "Chicago",
    People_registered: 300,
  },
  {
    Initiation: "Protecting natural habitats",
    NGO_involved: "The Nature Conservancy",
    Location: "Yellowstone National Park",
    People_registered: 100,
  },
  {
    Initiation: "Combating global poverty",
    NGO_involved: "Oxfam",
    Location: "Dhaka",
    People_registered: 400,
  },
  {
    Initiation: "Supporting childhood cancer",
    NGO_involved: "St. Jude Children's Research Hospital",
    Location: "Memphis",
    People_registered: 150,
  },
  {
    Initiation: "Offering social services",
    NGO_involved: "The Salvation Army",
    Location: "London",
    People_registered: 200,
  },
];

function Cards() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="img">
              <img
                src={`https://via.placeholder.com/150?text=${item.NGO_involved}`}
                alt={item.NGO_involved}
              />
            </div>
            <div className="initiation">{item.Initiation}</div>
            <div className="NGO">{item.NGO_involved}</div>
            <div className="location">{item.Location}</div>
            <div className="people">People: {item.People_registered}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cards;
