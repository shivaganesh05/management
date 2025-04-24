import React, { useState, useEffect } from "react";
import image1 from "../assets/slider1.jpg";
import image2 from "../assets/slider2.jpg";

const slides = [
    { id: 1, image: image1, title: 'Access Your Free Course & Grow Today', description: 'Reach out to the most competent & passionate mentors', buttonText: 'Learn more' },
    { id: 2, image: image2, title: 'Learn From Anywhere, On Any Device', description: 'Reach out to the most competent & passionate mentors', buttonText: 'Explore' },

  // Add more slides as needed
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);

      // Preload the next image
      const nextSlideIndex = (currentSlide + 1) % slides.length;
      const nextImage = new Image();
      nextImage.src = slides[nextSlideIndex].image;
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  return (
    <div className="relative h-full overflow-hidden ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide absolute top-0 left-0 w-full bg-no-repeat h-[1600px] transition-opacity duration-1000 opacity-${
            index === currentSlide ? "100" : "0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            width: "1300px",
            height: "550px",
            display: "flex",
            backgroundRepeat: "none",
          }}
        >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-6xl font-semibold pt-4">{slide.title}</h1>
            <p className="text-2xl py-12">{slide.description}</p>
            <button className="bg-white rounded-full px-8 py-3 text-2xl border-1 border-slate-500 hover:bg-black text-black hover:text-white">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;