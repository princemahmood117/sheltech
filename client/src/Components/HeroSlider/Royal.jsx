import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { MoveRight, MoveLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Title from "../Titile/Title";

export default function Royal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const projects = [
    {
      name: "Sheltech MH Heights",
      type: "Commercial",
      series: "Sapphire Series",
      location: "Mohammadpur",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      name: "Sheltech Rebecca Mohiuddin",
      type: "Residential",
      series: "Ruby Series",
      location: "Dhanmondi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      name: "Sheltech Crimson Palace",
      type: "Residential",
      series: "Condominium",
      location: "Gulshan",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    },
    {
      name: "Sheltech Azure Heights",
      type: "Commercial",
      series: "Diamond Series",
      location: "Banani",
      image:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    },
    {
      name: "Sheltech Green Valley",
      type: "Residential",
      series: "Emerald Series",
      location: "Uttara",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      name: "Sheltech Royal Grandeur",
      type: "Residential",
      series: "Premium Series",
      location: "Bashundhara",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
  ];

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const currentProject = projects[currentSlide];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row ">
      {/* Left Side - Content */}
      <div className="lg:w-1/2 w-full bg-gray-50 p-8 lg:p-16 flex flex-col justify-center">
        <div className="">
          <Title text={'EXPERIENCE ROYAL GRANDEUR'}></Title>
          {/* Dynamic Subtitle - Project Name */}
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800 transition-all duration-500">
            {currentProject.name}
          </h2>

          {/* Dynamic Details */}
          <p className="text-md text-gray-600 mb-8 transition-all duration-500">
            {currentProject.type} • {currentProject.series} •{" "}
            {currentProject.location}
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-8">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer">
                {/* Animated Background - slides from left */}
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0 ease">
                  <MoveLeft className="w-6 h-6" />
                </span>

                {/* Default Icon - slides to right on hover */}
                <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                  <MoveLeft className="w-6 h-6" />
                </span>

                <span className="relative invisible">
                  <MoveLeft className="w-6 h-6" />
                </span>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-gray-800 rounded-full shadow-md group bg-white  cursor-pointer">
                {/* Animated Background - slides from left */}
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0 ease">
                  <MoveRight className="w-6 h-6" />
                </span>

                {/* Default Icon - slides to right on hover */}
                <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                  <MoveRight className="w-6 h-6" />
                </span>

                <span className="relative invisible">
                  <MoveRight className="w-6 h-6" />
                </span>
              </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image Slider with Swiper */}
      <div className="lg:w-3/5 w-full relative overflow-hidden flex items-center">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          speed={700}
          loop={true}
          autoplay
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className="w-full h-full py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                    isActive
                      ? "scale-90 md:scale-100 opacity-100 pt-4"
                      : "scale-75 opacity-60"
                  }`}
                  style={{ height: "600px" }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Navy Bar */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a2a] to-transparent pointer-events-none z-10" /> */}
      </div>
    </div>
  );
}
