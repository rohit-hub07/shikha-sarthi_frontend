import WCU from "./whyChooseUs";
import KitchenDesign from "./kitchen-design";
import Bedroom from "./bedroom-interiors";
import Livingroom from "./living-room-interiors";
import Service from "./service";
import Home6 from "./home6";
import Gallery from "./gallery";
import CTA from "./callToAction";
import HomeBanner from "./banner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <WCU />
      <KitchenDesign />
      <Bedroom />
      <Livingroom />
      <div id="services">
        <Service />
      </div>
      <Home6 />
      <Gallery />
      <CTA />
    </div>
  );
};

export default Home;
