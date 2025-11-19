

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { projects } from "./landmarkProjectsInfo";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// Mock data
const LandmarkSliders = () => {
  return (
    <div className="w-full">
      <div>
        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="landmarkSwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative group overflow-hidden cursor-pointer h-[400px]">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Coming Soon or Sold Out Overlay */}
                {(project.comingSoon || project.soldOut) && (
                  <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-400 tracking-wider">
                      {project.soldOut ? "SOLD OUT" : "COMING SOON"}
                    </span>
                  </div>
                )}

                {/* Bottom Info */}
                <div className="absolute bottom-8 bg-black/50 left-0 right-0 p-6 text-white bg-linear-to-t from-black/70 to-transparent group-hover:bg-blue-900/80 transition-all duration-600">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium">
                      {project.status} • {project.location}
                    </p>
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

export default LandmarkSliders;







