
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slides from "./legacyData";
import Title from "../Titile/Title";

const LegacySlides = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeSlide = (newIndex) => {
    // Start fade-out
    setAnimate(false);

    setTimeout(() => {
      setIndex(newIndex);
      // Fade-in
      setAnimate(true);
    }, 250); // Animation timing
  };

  const nextSlide = () => {
    changeSlide((index + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((index - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-[#E4E6E8] md:py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">

        {/* LEFT SIDE ICON */}
        <div className="flex justify-center items-center min-h-[420px] md:min-h-[500px]">
          <img
            key={slides[index].icon} // triggers re-render → animation works
            src={slides[index].icon}
            alt="legacy icon"
            className={`w-96 md:w-[400px] h-auto transition-all duration-500 ease-out invert             
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            />
              
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-2 md:space-y-8 min-h-[420px] md:min-h-[500px] flex flex-col justify-start">

          <Title text={"AN INHERENT LEGACY OF EXCELLENCE"} />

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300  border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer">

              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0">
                <FaArrowLeft className="w-4 h-6" />
              </span>

              <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                <FaArrowLeft className="w-4 h-6" />
              </span>

              <span className="relative invisible">
                <FaArrowLeft className="w-4 h-6" />
              </span>
            </button>

            {/* NEXT */}
            <button
              onClick={nextSlide}
              className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer">

              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0 ease">
                <FaArrowRight className="w-4 h-6" />
              </span>

              <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                <FaArrowRight className="w-4 h-6" />
              </span>

              <span className="relative invisible">
                <FaArrowRight className="w-4 h-6" />
              </span>
            </button>
          </div>

          <hr className="border-gray-400 mt-2" />

          {/* TEXTS WITH ANIMATION */}
          <div
            key={slides[index].id}
            className={`
              transition-all duration-500 ease-out
              ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
            `}
          >
            <h2 className="text-2xl font-medium text-[#11153A] mb-3">
              {slides[index].title}
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              {slides[index].description}
            </p>
          </div>
        </div>

      </div>




      <h1>Glimps of Inspiration section here</h1>
    </div>
  );
};

export default LegacySlides;
