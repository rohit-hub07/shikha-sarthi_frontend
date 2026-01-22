// import { Outlet } from "react-router-dom";
// import Template from "../designIdeas/template/designIdeas";

// const secondFront = () => {
//   return (
//     <div>
//       <div>secondFront</div>
//       <Template pageKey="design4" />
//       <Outlet />
//     </div>
//   );
// };

// export default secondFront;


import { useParams } from "react-router-dom";
import Template from "../designIdeas/template/designIdeas";
import TemplateForCities from "../designIdeas/template/templateForCities";

const SecondFront = () => {
  const { designType } = useParams();

  // Decide API based on button clicked
  const apiMap = {
    modularKitchen: "design1",
    wardrobe: "design2",
    bathroom: "design3",
    masterBedroom: "design4",
    livingroom: "design5",
    poojaroom: "design6",
    tvUnit: "design7",
    falseCelling: "design8",
    kidsBedroom: "design9",
    balcony: "design10",
    diningRoom: "design11",
    foyer: "design12",
    homesByLivspace: "design13",
    homeOffice: "design14",
    guestBedroom: "design15",
    window: "design16",
    flooring: "design17",
    wallDecor: "design18",
    wallPaint: "design19",
    homeWallpaper: "design20",
    tile: "design21",
    studyroom: "design22",
    kitchenSinks: "design23",
    spaceSavingDesign: "design24",
    door: "design25",
    staircase: "design26",
    crockeryUnit: "design27",
    homeBar: "design28"
  };

  const cityMap = {
    saran: "city1",
    patna: "city2",
    vijyawada: "city3",
    kanpur: "city4",
    goa: "city5",
    dehradun: "city6",
    agra: "city7",
    surat: "city8"
  }

  const pageKey = apiMap[designType];
  const cityKey = cityMap[designType];

  // Safety check
  // if (!pageKey) {
  //   return (
  //     <div style={{ padding: "2rem", textAlign: "center" }}>
  //       <h2>Design not found</h2>
  //       <p>Please select a valid design.</p>
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <Template pageKey={pageKey} />
  //     <TemplateForCities pageKey={cityKey} />
  //   </div>
  // );

  // DESIGN PAGE
  if (pageKey) {
    return <Template pageKey={pageKey} />;
  }

  // CITY PAGE
  if (cityKey) {
    return <TemplateForCities cityKey={cityKey} />;
  }

  // INVALID ROUTE
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Page not found</h2>
    </div>
  );

};

export default SecondFront;
