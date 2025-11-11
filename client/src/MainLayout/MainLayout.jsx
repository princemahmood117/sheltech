import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
    {isLoading && <LoadingScreen handleLoadingComplete={handleLoadingComplete} />}

     { !isLoading && <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>}
    </>
  );
};

export default MainLayout;
