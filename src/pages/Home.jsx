import React from "react";
import Banner from "../components/Banner";
import Painting from "../components/Painting";
import Prayer from "../components/Prayer";
import PiTi from "../components/PiTi";
import Games from "../components/Games";
import Planting from "../components/Planting";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="bg-body-secondary p-3 p-md-4 p-lg-5">
        <div className="container-fluid">
          <Painting />
          <Prayer />
          <PiTi />
          <Games />
          <Planting />
        </div>
      </div>
    </div>
  );
};

export default Home;
