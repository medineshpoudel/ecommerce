import AboutGodam from "../../components/landing/AboutGodam";
import LandingBanner from "../../components/landing/LandingBanner";
import NewCollection from "../../components/landing/NewCollection";

const Landing = () => {
  return (
    <div className="h-full overflow-auto">
      <LandingBanner />
      <AboutGodam />
      <NewCollection />
    </div>
  );
};

export default Landing;
