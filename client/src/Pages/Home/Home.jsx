
import Navbar from '../../Components/Navbar/Navbar';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import Royal from '../../Components/HeroSlider/Royal';
import LandmarkProjects from '../../Components/HeroSlider/LandmarkProject/LandmarkProject';
import EmptyDiv from '../../Components/Footer/EmptyDiv';
import MapSection from '../../Components/MapSection/MapSection';
import LegacySlides from '../../Components/LegacySection/LegacySlides';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
     <>
     <Helmet>
      <title>Sheltech Best Real Estate Developer in Bangladesh</title>
     </Helmet>
     
         <div className="relative">
            <Navbar></Navbar>
            <HeroSlider></HeroSlider>
            <div className='mt-14'>
              <Royal></Royal>
            </div>
            <LandmarkProjects youtubeId={'kqq0JTjrXlM'}></LandmarkProjects>
            {/* <EmptyDiv></EmptyDiv> */}
            <MapSection></MapSection>
            <LegacySlides></LegacySlides>
          </div>
     </>
    );
};

export default Home;