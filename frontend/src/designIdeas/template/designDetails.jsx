import { useParams } from "react-router-dom";
import pageConfig from "../data/designIdeas.json";

const DesignDetails = () => {
  const { pageKey } = useParams();
  const config = pageConfig[pageKey];

  if (!config) return <h2 className="text-center mt-5">Page not found</h2>;

  const item = config.images?.[0];

  return (
    <div className="container-fluid py-3">
      <div className="row g-4">
        {/* LEFT IMAGE */}
        <div className="col-lg-8">
          <div className="rounded-4 overflow-hidden bg-light">
            <img
              src={item?.src}
              alt={config.title}
              className="w-100"
              style={{ height: "86vh", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="col-lg-4">
          <div className="ps-lg-3">
            {/* Title */}
            <h2
              className="fw-bold"
              style={{ fontSize: "30px", lineHeight: "1.2" }}
            >
              {config.title}
            </h2>

            {/* Small boxes row  */}
            <div className="d-flex flex-wrap gap-2 mt-3">
              {[
                "Customisable",
                "10 yr warranty",
                "Easy EMIs",
                "45 day delivery",
              ].map((t, i) => (
                <div
                  key={i}
                  className="border rounded-3 px-3 py-2 text-center"
                  style={{ fontSize: "12px", minWidth: "120px" }}
                >
                  <b>{t}</b>
                </div>
              ))}
            </div>

            {/* Details Heading */}
            <h5 className="fw-bold mt-4 mb-3">Kitchen Design Details:</h5>
            

            {/* Details List */}
            <div style={{ fontSize: "15px", lineHeight: "1.8" }}>
              <p className="mb-1">
                <b>Size:</b> {item?.size}
              </p>
            </div>
          </div>
          <button className="btn btn-outline-danger w-100 py-1 rounded-pill fw-semibold mt-2">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignDetails;
