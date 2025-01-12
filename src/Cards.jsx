import React from "react";
import Slider from "react-slick";
import "./Cards.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const data = [
  { Path:"/images/photo1.jpg",
    Initiation: "Providing clean water",
    NGO_involved: "Charity: Water",
    Location: "Addis Ababa",
    People_registered: 250,
  },
  { Path:"/images/photo2.jpg",
    Initiation: "Distributing food supplies",
    NGO_involved: "Feeding America",
    Location: "Chicago",
    People_registered: 300,
  },
  { Path:"/images/photo3.jpg",
    Initiation: "Protecting natural habitats",
    NGO_involved: "The Nature Conservancy",
    Location: "Yellowstone National Park",
    People_registered: 100,
  },
  { Path: "/images/photo4.jpg",
    Initiation: "Combating global poverty",
    NGO_involved: "Oxfam",
    Location: "Dhaka",
    People_registered: 400,
  },
  { Path:"/images/photo5.jpg",
    Initiation: "Supporting childhood cancer",
    NGO_involved: "St. Jude Children's Research Hospital",
    Location: "Memphis",
    People_registered: 150,
  },
  { Path:"/images/photo6.jpg",
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
                src={item.Path}
                alt="https://via.placeholder.com/150"
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
