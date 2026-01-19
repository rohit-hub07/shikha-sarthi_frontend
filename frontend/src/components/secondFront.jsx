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

const SecondFront = () => {
  const { designType } = useParams();

  // Decide API based on button clicked
  const apiMap = {
    modularKitchen: "design1",
    bedroom: "design5",
    livingroom: "design6",
  };

  const pageKey = apiMap[designType];

  // Safety check
  if (!pageKey) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Design not found</h2>
        <p>Please select a valid design.</p>
      </div>
    );
  }

  return (
    <div>
      <Template pageKey={pageKey} />
    </div>
  );
};

export default SecondFront;
