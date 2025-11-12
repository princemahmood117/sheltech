import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {  FaArrowRight } from "react-icons/fa";
import Title from "../../Titile/Title";
import insights from "./insightData";
import ArrowButton from "../../ArrowButton/ArrowButton";

const InsightSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();


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

  const handleInsightClick = (slug) => {
    navigate(`/insights/${slug}`);
  };

  const handleViewAll = () => {
    navigate("/insights");
  };

  return (
    <div className="w-full py-0 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <Title className="uppercase" text="Insights" />

          <div className="flex items-center gap-4">
            <ArrowButton direction="left" onClick={handlePrev}></ArrowButton>
            <ArrowButton direction="right" onClick={handleNext}></ArrowButton>

            <button
              onClick={handleViewAll}
              className="relative inline-flex items-center px-4 h-10 justify-center overflow-hidden font-medium transition duration-300 border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer ml-4">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0">
                <span className="flex items-center gap-2">
                  View All <FaArrowRight className="w-4 h-4" />
                </span>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                <span className="flex items-center gap-2">
                  View All <FaArrowRight className="w-4 h-4" />
                </span>
              </span>
              <span className="relative invisible flex items-center gap-2">
                View All <FaArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="insightsSwiper">
          {insights.map((insight) => (
            <SwiperSlide key={insight.id}>
              <div
                onClick={() => handleInsightClick(insight.slug)}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-[500px] transition-transform duration-300 hover:scale-105 md:h-[650px]"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Title */}
                  <h3 className="text-white text-2xl font-semibold leading-tight group-hover:translate-y-[-4px] transition-transform duration-300">
                    {insight.title}
                  </h3>

                  {/* Bottom Info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white text-lg font-medium">
                        {insight.month} {insight.year}
                      </p>
                    </div>
                    <div>
                      <span className="text-white text-sm font-medium px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InsightSection;
