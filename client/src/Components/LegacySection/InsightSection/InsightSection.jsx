import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Title from "../../Titile/Title";
import insights from "./insightData";

const InsightSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();

  //   const insights = [
  //     {
  //       id: 1,
  //       title: 'Sheltech Kanakchapa is Raising the Standard of City Living',
  //       image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  //       month: 'August',
  //       year: '2025',
  //       category: 'News',
  //       slug: 'sheltech-kanakchapa-raising-standard'
  //     },
  //     {
  //       id: 2,
  //       title: 'Sheltech Honoured for Its Vision of a Sustainable Tomorrow',
  //       image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  //       month: 'July',
  //       year: '2025',
  //       category: 'News',
  //       slug: 'sheltech-vision-sustainable-tomorrow'
  //     },
  //     {
  //       id: 3,
  //       title: 'The Tejgaon Transition: Forging the Future with Sheltech',
  //       image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  //       month: 'June',
  //       year: '2025',
  //       category: 'News',
  //       slug: 'tejgaon-transition-forging-future'
  //     },
  //     {
  //       id: 4,
  //       title: 'Sheltech Introduces Smart Home Technology',
  //       image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  //       month: 'May',
  //       year: '2025',
  //       category: 'News',
  //       slug: 'sheltech-smart-home-technology'
  //     },
  //     {
  //       id: 5,
  //       title: 'Green Building Initiative by Sheltech',
  //       image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  //       month: 'April',
  //       year: '2025',
  //       category: 'News',
  //       slug: 'green-building-initiative'
  //     },
  //     {
  //       id: 6,
  //       title: 'Sheltech Wins Best Developer Award 2025',
  //       image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
  //       month: 'March',
  //       year: '2025',
  //       category: 'News',
  //       slug: 'best-developer-award-2025'
  //     }
  //   ];

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
          {/* Title */}
          <Title className="uppercase" text="Insights" />

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300  border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer"
            >
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

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer"
            >
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

            {/* view all button */}
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
          pagination={{
            clickable: true,
          }}
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
                {/* Background Image */}
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
