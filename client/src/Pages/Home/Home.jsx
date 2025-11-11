
import Navbar from '../../Components/Navbar/Navbar';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import Royal from '../../Components/HeroSlider/Royal';
import LandmarkProjects from '../../Components/HeroSlider/LandmarkProject/LandmarkProject';
import EmptyDiv from '../../Components/Footer/EmptyDiv';
import MapSection from '../../Components/MapSection/MapSection';
import LegacySlides from '../../Components/LegacySection/LegacySlides';

const Home = () => {
    return (
         <div className="relative">
            <Navbar></Navbar>
            <HeroSlider></HeroSlider>
            <div className='mt-24'>
              <Royal></Royal>
            </div>
            <LandmarkProjects youtubeId={'kqq0JTjrXlM'}></LandmarkProjects>
            {/* <EmptyDiv></EmptyDiv> */}
            <MapSection></MapSection>
            <LegacySlides></LegacySlides>
          </div>
    );
};

export default Home;