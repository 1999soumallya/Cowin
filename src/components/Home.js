import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../StyleSheet/image.css';

export const Home = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: window.innerWidth, min: window.innerWidth },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={Infinity}
          containerClass="carousel-container"
          arrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="image">
            <img
              src={
                "https://prod-cdn.preprod.co-vin.in/assets/images/onebillionvaccinationbannerhindi.png"
              }
              width={window.innerWidth}
              alt="HeroImage"
            />
          </div>
          <div className="image">
            <img
              src={
                "https://prod-cdn.preprod.co-vin.in/assets/images/onebillionvaccinationbannerhindi.png"
              }
              width={window.innerWidth}
              alt="HeroImage"
            />
          </div>
          <div className="image">
            <img
              src={
                "https://prod-cdn.preprod.co-vin.in/assets/images/onebillionvaccinationbannerhindi.png"
              }
              width={window.innerWidth}
              alt="HeroImage"
            />
          </div>
          <div className="image">
            <img
              src={
                "https://prod-cdn.preprod.co-vin.in/assets/images/onebillionvaccinationbannerhindi.png"
              }
              width={window.innerWidth}
              alt="HeroImage"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};