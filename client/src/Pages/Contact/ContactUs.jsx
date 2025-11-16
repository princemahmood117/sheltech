import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    const handleLoadingComplete = () => {
      setIsLoading(false);
    };
  return (
    <div>
      <Helmet>
        <title>Sheltec | Media Center</title>
      </Helmet>
        
      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}
      {!isLoading && <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://www.sheltech-bd.com/cms/admin/uploads/page/contact-us/1707389952Y9fNd.jpg"
          alt="About Sheltech"
          className="w-full h-full object-cover"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <p className="text-2xl text-white uppercase tracking-wider">
            Contact
          </p>

          <h1
            style={{ fontFamily: "Arial" }}
            className="text-4xl md:text-7xl lg:text-5xl font-light text-white uppercase tracking-wider text-center px-4"
          >
           CONTACT OUR TEAM OF PROFESSIONALS FOR SUPPORT
          </h1>
        </div>
      </div>}
    </div>
  );
};

export default ContactUs;
