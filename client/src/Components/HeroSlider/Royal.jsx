// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
// import { MoveRight, MoveLeft } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import Title from "../Titile/Title";
// import ArrowButton from "../ArrowButton/ArrowButton";

// export default function Royal() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const projects = [
//     {
//       name: "Sheltech MH Heights",
//       type: "Commercial",
//       series: "Sapphire Series",
//       location: "Mohammadpur",
//       image:
//         "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//     },
//     {
//       name: "Sheltech Rebecca Mohiuddin",
//       type: "Residential",
//       series: "Ruby Series",
//       location: "Dhanmondi",
//       image:
//         "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
//     },
//     {
//       name: "Sheltech Crimson Palace",
//       type: "Residential",
//       series: "Condominium",
//       location: "Gulshan",
//       image:
//         "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
//     },
//     {
//       name: "Sheltech Azure Heights",
//       type: "Commercial",
//       series: "Diamond Series",
//       location: "Banani",
//       image:
//         "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
//     },
//     {
//       name: "Sheltech Green Valley",
//       type: "Residential",
//       series: "Emerald Series",
//       location: "Uttara",
//       image:
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
//     },
//     {
//       name: "Sheltech Royal Grandeur",
//       type: "Residential",
//       series: "Premium Series",
//       location: "Bashundhara",
//       image:
//         "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
//     },
//   ];

//   const handleNext = () => {
//     if (swiperInstance) {
//       swiperInstance.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiperInstance) {
//       swiperInstance.slidePrev();
//     }
//   };

//   const handleSlideChange = (swiper) => {
//     setCurrentSlide(swiper.realIndex);
//   };

//   const currentProject = projects[currentSlide];

//   return (
//     <div className="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row ">
//       {/* Left Side - Content */}
//       <div className="lg:w-1/2 w-full bg-gray-50 px-20 flex flex-col">
//         <div className="">
//           <Title text={'EXPERIENCE ROYAL GRANDEUR'}></Title>
//           <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800 transition-all duration-500">
//             {currentProject.name}
//           </h2>

//           {/* Dynamic Details */}
//           <p className="text-md text-gray-600 mb-8 transition-all duration-500">
//             {currentProject.type} • {currentProject.series} •{" "}
//             {currentProject.location}
//           </p>

//           {/* Navigation Buttons */}
//           <div className="flex gap-8">
//               {/* Previous Button */}
//               <ArrowButton direction="left" onClick={handlePrev}></ArrowButton>
//               {/* Next Button */}
//               <ArrowButton direction="right" onClick={handleNext}></ArrowButton>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image Slider with Swiper */}
//       <div className="lg:w-3/5 w-full relative overflow-hidden flex items-center">
//         <Swiper
//           modules={[Navigation, EffectCoverflow, Autoplay]}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={2}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2,
//             slideShadows: false,
//           }}
//           speed={700}
//           loop={true}
//           autoplay
//           onSwiper={setSwiperInstance}
//           onSlideChange={handleSlideChange}
//           className="w-full h-full "
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               {({ isActive }) => (
//                 <div
//                   className={`relative overflow-hidden transition-all duration-500 ${
//                     isActive
//                       ? "scale-90 md:scale-100 opacity-100 duration-500"
//                       : "scale-75 opacity-60"
//                   }`}
//                   style={{ height: "600px" }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }









// current


import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Title from "../Titile/Title";
import ArrowButton from "../ArrowButton/ArrowButton";
import projects from "./royalProjects";

export default function Royal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  
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
    <div className="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row mb-3">
      {/* Left Side - Content */}
      <div className="lg:w-1/2  bg-gray-50 flex flex-col md:mt-8">
        <div className="md:px-8 lg:px-16 px-2 ">
          <Title text={"EXPERIENCE ROYAL GRANDEUR"}></Title>
          <h2 className="text-xl lg:text-2xl font-semibold  text-gray-800 transition-all duration-500">
            {currentProject.name}
          </h2>

          {/* Dynamic Details */}
          <p className="text-md text-gray-600 mb-3 transition-all duration-500">
            {currentProject.type} • {currentProject.series} •{" "}
            {currentProject.location}
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-6">
            {/* Previous Button */}
            <ArrowButton direction="left" onClick={handlePrev}></ArrowButton>
            {/* Next Button */}
            <ArrowButton direction="right" onClick={handleNext}></ArrowButton>
          </div>
        </div>
      </div>

      {/* Right Side - Image Slider with Swiper */}
      <div className="lg:w-1/2 w-full relative overflow-visible flex items-center py-12 lg:py-0">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          slidesPerView="auto"
                   coverflowEffect={{
            rotate: 0,
            stretch: -100,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
            spaceBetween : -80
          }}
          speed={700}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2.1,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`relative overflow-hidden shadow-lg transition-all duration-700  ${
                    isActive
                      ? " opacity-100 z-20"
                      : isNext
                      ? "scale-90 opacity-100 z-10"
                      : "scale-90 opacity-100 z-0"
                  }`}
                  style={{
                    width: isActive ? "500px" : "300px",
                    height: isActive ? "600px" : "450px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
















// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
// import { MoveRight, MoveLeft } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";

// // Mock data for demonstration
// const projects = [
//   {
//     name: "Royal Paradise",
//     type: "Residential",
//     series: "Premium",
//     location: "Gulshan, Dhaka",
//     image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=1000&fit=crop"
//   },
//   {
//     name: "Royal Crown",
//     type: "Residential",
//     series: "Luxury",
//     location: "Banani, Dhaka",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=1000&fit=crop"
//   },
//   {
//     name: "Royal Heights",
//     type: "Residential",
//     series: "Elite",
//     location: "Dhanmondi, Dhaka",
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=1000&fit=crop"
//   },
//   {
//     name: "Royal Garden",
//     type: "Residential",
//     series: "Premium",
//     location: "Uttara, Dhaka",
//     image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop"
//   }
// ];

// const Title = ({ text }) => (
//   <h3 className="text-sm font-semibold text-gray-500 mb-3 tracking-wider">{text}</h3>
// );

// const ArrowButton = ({ direction, onClick }) => (
//   <button
//     onClick={onClick}
//     className="w-12 h-12 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center"
//   >
//     {direction === "left" ? <MoveLeft size={20} /> : <MoveRight size={20} />}
//   </button>
// );

// export default function Royal() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const handleNext = () => {
//     if (swiperInstance) {
//       swiperInstance.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiperInstance) {
//       swiperInstance.slidePrev();
//     }
//   };

//   const handleSlideChange = (swiper) => {
//     setCurrentSlide(swiper.realIndex);
//   };

//   const currentProject = projects[currentSlide];

//   return (
//     <div className="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row">
//       {/* Left Side - Content */}
//       <div className="lg:w-1/3 bg-gray-50 px-6 lg:px-12 py-12 flex flex-col justify-center">
//         <div>
//           <Title text={"EXPERIENCE ROYAL GRANDEUR"} />
//           <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800 transition-all duration-500">
//             {currentProject.name}
//           </h2>

//           {/* Dynamic Details */}
//           <p className="text-md text-gray-600 mb-8 transition-all duration-500">
//             {currentProject.type} • {currentProject.series} •{" "}
//             {currentProject.location}
//           </p>

//           {/* Navigation Buttons */}
//           <div className="flex gap-4">
//             <ArrowButton direction="left" onClick={handlePrev} />
//             <ArrowButton direction="right" onClick={handleNext} />
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image Slider with Swiper */}
//       <div className="lg:w-2/3 w-full relative overflow-visible flex items-start">
//         <Swiper
//           modules={[Navigation, EffectCoverflow, Autoplay]}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={false}
//           slidesPerView="auto"
//           spaceBetween={-150}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: -150,
//             depth: 200,
//             modifier: 1.5,
//             slideShadows: false,
//           }}
//           speed={700}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           onSwiper={setSwiperInstance}
//           onSlideChange={handleSlideChange}
//           className="w-full h-[600px] !pt-0 !mt-0"
//           breakpoints={{
//             320: {
//               slidesPerView: 1.5,
//               spaceBetween: -80,
//             },
//             768: {
//               slidesPerView: 1,
//               spaceBetween: -100,
//             },
//             1024: {
//               slidesPerView: 2.5,
//               spaceBetween: -150,
//             },
//           }}
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index} className="!h-auto !flex !items-start !pt-0 !mt-0">
//               {({ isActive, isPrev, isNext }) => (
//                 <div
//                   className={`relative overflow-hidden shadow-lg transition-all duration-700 ${
//                     isActive
//                       ? "scale-100 opacity-100 z-20"
//                       : isNext
//                       ? "scale-90 opacity-100 z-10"
//                       : "scale-90 opacity-100 z-0"
//                   }`}
//                   style={{
//                     width: isActive ? "500px" : "300px",
//                     height: isActive ? "600px" : "450px",
//                   }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
//                   />
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }









