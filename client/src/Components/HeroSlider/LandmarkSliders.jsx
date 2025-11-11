import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LandmarkSliders = () => {
  const projects = [
    {
      id: 1,
      title: "Sheltech Sapphire Tower",
      status: "Handed Over",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      location: "Banani",
    },
    {
      id: 2,
      title: "Sheltech Paradise Heights",
      status: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      location: "Uttara",
    },
    {
      id: 3,
      title: "Sheltech Crimson Palace",
      status: "Upcoming",
      image: "https://i.postimg.cc/Rhmk6vyL/coming-Soon.png",
      location: "Uttara",
    },
    {
      id: 4,
      title: "Sheltech Azure Heights",
      status: "Handed Over",
      image:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
      location: "Mohammadpur",
    },
    {
      id: 5,
      title: "Sheltech Green Valley",
      status: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      location: "Dhanmondi",
    },
    {
      id: 6,
      title: "Sheltech Royal Grandeur",
      status: "Upcoming",
      image: "https://i.postimg.cc/Rhmk6vyL/coming-Soon.png",
      location: "North-Badda",
    },
    {
      id: 7,
      title: "Sheltech Diamond Plaza",
      status: "Handed Over",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      location: "Shahjadpur",
    },
    {
      id: 8,
      title: "Sheltech Emerald Heights",
      status: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
      location: "Farmgate",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "handed over":
        return "";
      case "ongoing":
        return "";
      case "upcoming":
        return "";
      default:
        return "";
    }
  };

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
          className="landmarkSwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer md:h-[650px] h-[470px] ">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                <div
                  className="absolute bottom-8 left-0 right-0 p-6 text-white bg-black/40 group-hover:bg-blue-900/80 transition-all duration-500">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <p className={`${getStatusColor(project.status)} rounded-full text-sm font-medium`}>
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
