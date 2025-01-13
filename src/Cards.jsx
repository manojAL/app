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
              />
            </div>
            <div className="initiation">{item.Initiation}</div>
            <div className="NGO">{item.NGO_involved}</div>
            <div className="location">{item.Location}</div>
            <div className="people">People: {item.People_registered}</div>
            <div className="button"><button>JOIN</button></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cards;
