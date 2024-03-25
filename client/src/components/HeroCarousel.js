import React, { useEffect, useState } from "react";
import heroTexts from "../srcdata/heroText";
import { FaArrowDown } from "react-icons/fa";

const HeroCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.querySelectorAll(".hero");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      setSlideIndex((prevIndex) => (prevIndex % slides.length) + 1);

      slides[
        slideIndex === 0 ? slides.length - 1 : slideIndex - 1
      ].style.display = "block";
    };

    const interval = setInterval(showSlides, 5000); // Change image every  5 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [slideIndex]);

  return (
    <div className="hero-main relative h-screen w-screen text-left text-white overflow-y-hidden">
      <div className="hero h-full w-full" id="hc1">
        <div className="overlay-hero bg-black/50 h-full w-full flex flex-col md:justify-center items-center pt-40 md:pt-0 px-5 md:px-20 lg:px-40">
          <h2 className="hero-text text-3xl lg:text-5xl font-medium mb-5 self-start font-merriweather" id="header">
            {heroTexts.text1.header}
          </h2>
          <h4 className="hero-text text-lg md:text-justify">
            {heroTexts.text1.footer}
          </h4>
        </div>
      </div>
      <div className="hero h-full w-full" id="hc2">
        <div className="overlay-hero bg-black/50 h-full w-full flex flex-col md:justify-center items-center pt-40 md:pt-0 px-5 md:px-20 lg:px-40">
          <h2 className="hero-text text-3xl lg:text-5xl font-medium mb-5 self-start font-merriweather" id="header">
            {heroTexts.text2.header}
          </h2>
          <h4 className="hero-text text-lg md:text-justify">
            {heroTexts.text2.footer}
          </h4>
        </div>
      </div>
      <div className="hero h-full w-full" id="hc3">
        <div className="overlay-hero bg-black/50 h-full w-full flex flex-col md:justify-center items-center pt-40 md:pt-0 px-5 md:px-20 lg:px-40">
          <h2 className="hero-text text-3xl lg:text-5xl font-medium mb-5 self-start font-merriweather" id="header">
            {heroTexts.text3.header}
          </h2>
          <h4 className="hero-text text-lg md:text-justify" id="hero-footer">
            {heroTexts.text3.footer}
          </h4>
        </div>
      </div>
      <a href="#featured"><div className="indicater absolute top-[70%] lg:top-[85%] left-0 right-0 mx-auto border rounded-full px-4 py-8 animate-bounce w-fit"><FaArrowDown /></div></a>
    </div>
  );
};

export default HeroCarousel;
