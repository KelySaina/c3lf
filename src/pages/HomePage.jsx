import HomeHeroSectionComponent from "../components/home/HeroSectionComponent";
import HomeUsSectionComponent from "../components/home/UsSectionComponent";
import HomeActivitiesSectionComponent from "../components/home/ActivitiesSectionComponent";

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HomeHeroSectionComponent />
      <HomeUsSectionComponent />
      <HomeActivitiesSectionComponent />
    </div>
  );
};

export default HomePage;
