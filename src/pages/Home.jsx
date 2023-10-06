import HeroComponent from '../components/HeroComponent';
import FeatureComponent from '../components/FeatureComponent';
import PopularDrinksComponents from '../components/PopularDrinksComponents';
const Home = () => {
  return (
    <>
      <HeroComponent />
      <div className="py-16 sm:py-24">
        <PopularDrinksComponents />
      </div>
      <FeatureComponent />
    </>
  );
}

export default Home;
