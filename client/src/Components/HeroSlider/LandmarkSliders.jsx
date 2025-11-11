import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "./landmarkProjectsInfo";

const LandmarkSliders = () => {
  return (
    <div className="w-full  px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay
          modules={[Pagination, Navigation, Autoplay]}
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
          className="landmarkSwiper">
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer md:h-[650px] h-[470px] ">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 pb-4 group-hover:scale-110"/>

                <div
                  className="absolute bottom-8 left-0 right-0 p-6 text-white bg-black/40 group-hover:bg-blue-900/80 transition-all duration-500">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <p className="rounded-full text-sm font-medium">
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
