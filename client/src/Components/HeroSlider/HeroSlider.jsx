import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const [showText, setShowText] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1755060545F5qW4.jpg",
      title: "",
      subtitle: "",
    },
    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1755057781B34VR.jpg",
      title: "WOVEN IN LIGHT",
      subtitle: "WRAPPED IN GREEN",
    },
    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1744785421SHuDA.jpg",
      title: "A Breath",
      subtitle: "Beyond the Bustle",
    },
    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1759832977eTqSw.jpg",
      title: "ELEGANCE",
      subtitle: "FLOWS EFFORTLESSLY",
    },

    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1744786091jYgyp.jpg",
      title: "LIVING IN HARMONY",
      //   subtitle: "FLOWS EFFORTLESSLY",
    },

    {
      type: "vimeo",
      videoId: "1135059261",
      title: "Seamless Experience",
      subtitle: "",
    },

    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1744785324Q7WdT.jpg",
      title: "SAVORING",
      subtitle: "PEACEFUL MOMENTS",
    },
    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1707388840GxZVX.jpg",
      title: "EXPERIECNE",
      subtitle: "THE DIFFERENCE",
    },
    {
      type: "image",
      src: "https://www.sheltech-bd.com/cms/admin/uploads/page/home/1707388918tZYjM.jpg",
      title: "YOUR DREAM",
      subtitle: "OUR PLEDGE",
    },
  ];

  useEffect(() => {
    // Show text on initial load
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
    setShowText(false);
    setTimeout(() => setShowText(true), 1000);
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden m-0 p-0">
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        modules={[Navigation, EffectFade, Autoplay]}
        effect="slide"
        speed={700}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Image, Video, or Vimeo */}
              {slide.type === "vimeo" ? (
                <iframe
                  src={`https://player.vimeo.com/video/${slide.videoId}?autoplay=1&loop=1&muted=1&background=1&controls=0`}
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />


              ) : slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover "
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto text-white z-10">
                <h1
                  style={{
                    fontFamily: "'Spectral', Arial, Helvetica, sans-serif",
                    lineHeight: "1",
                  }}
                  className={`md:text-[90px] text-[80px] text-center tracking-tight transition-all duration-1000 ${
                    showText && currentSlideIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide.title}
                </h1>

                <h2
                  style={{
                    fontFamily: "'Spectral', Arial, Helvetica, sans-serif",
                  }}
                  className={`md:text-[45px] text-[40px] tracking-tight transition-all duration-1000 delay-300 ${
                    showText && currentSlideIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide.subtitle}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation - Invisible Click Areas */}
      <div className="swiper-button-prev-custom absolute left-0 top-0 w-1/2 h-full z-20 cursor-pointer" />
      <div className="swiper-button-next-custom absolute right-0 top-0 w-1/2 h-full z-20 cursor-pointer" />
    </div>
  );
}
