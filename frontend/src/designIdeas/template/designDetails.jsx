import { useParams, useNavigate } from "react-router-dom";
import pageConfig from "../data/designIdeas.json";

const DesignDetails = () => {
  const { pageKey } = useParams();
  const navigate = useNavigate();

  const config = pageConfig[pageKey];

  if (!config) return <h2 className="text-center mt-5">Page not found</h2>;

  const item = config.images?.[0];

  // All keys (for prev/next navigation)
  const keys = Object.keys(pageConfig);
  const currentIndex = keys.indexOf(pageKey);

  const prevKey = keys[(currentIndex - 1 + keys.length) % keys.length];
  const nextKey = keys[(currentIndex + 1) % keys.length];

  const prevConfig = pageConfig[prevKey];
  const nextConfig = pageConfig[nextKey];

  return (
    <div className="container-fluid py-3">
      <div className="row g-4">
        {/* LEFT IMAGE */}
        <div className="col-lg-8">
          <div
            className="rounded-4 overflow-hidden d-flex justify-content-center align-items-center"
            style={{
              height: "60vh",
              background: "#f5f5f5", // light grey like Livspace
              padding: "25px",
            }}
          >
            <img
              src={item?.src}
              alt={config.title}
              style={{
                width: "90%",
                height: "100%",
                objectFit: "contain", // show full image nicely
                objectPosition: "center",
              }}
            />
          </div>
          {/* BUTTONS UNDER IMAGE */}
          <div
            className="d-flex justify-content-between align-items-center mt-3 px-2 border-top pt-3"
            style={{
              background: "#fff", // white like Livspace
              paddingBottom: "12px",
            }}
          >
            {/* PREVIOUS */}
            {/* <div className="d-flex align-items-center gap-2"> */}
            <div
              className="d-flex align-items-center gap-2"
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/design/${prevKey}`)}
            >
              <button
                onClick={() => navigate(`/design/${prevKey}`)}
                className="btn btn-light shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "42px", height: "42px" }}
              >
                ❮
              </button>

              <div className="text-start">
                <small className="text-muted d-block">Previous Project</small>
                <b style={{ fontSize: "14px" }}>{prevConfig?.title}</b>
              </div>
            </div>

            {/* CENTER LINE */}
            <div
              style={{
                width: "1px",
                height: "45px",
                backgroundColor: "#ddd",
                margin: "0 20px",
              }}
            />

            {/* NEXT */}
            {/* <div className="d-flex align-items-center gap-2"> */}
            <div
              className="d-flex align-items-center gap-2"
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/design/${nextKey}`)}
            >
              <div className="text-end">
                <small className="text-muted d-block">Next Project</small>
                <b style={{ fontSize: "14px" }}>{nextConfig?.title}</b>
              </div>

              <button
                onClick={() => navigate(`/design/${nextKey}`)}
                className="btn btn-light shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "42px", height: "42px" }}
              >
                ❯
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="col-lg-4">
          <div
            className="ps-lg-3 d-flex flex-column"
            style={{
              height: "75vh",
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
            }}
          >
            {/* Scrollable Content */}
            <div style={{ overflowY: "auto", paddingRight: "6px" }}>
              {/* Title */}
              <h2
                className="fw-bold"
                style={{ fontSize: "30px", lineHeight: "1.2" }}
              >
                {config.title}
              </h2>

              {/* Small boxes row */}
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

              <div style={{ lineHeight: "1.3" }}>
                <p className="mb-1">
                  <b>Layout:</b> U Shaped Kitchen Design
                </p>
                <p className="mb-1">
                  <b>Room Dimension:</b> {item?.size} feet
                </p>
                <p className="mb-1">
                  <b>Style:</b> Classic
                </p>
                <p className="mb-1">
                  <b>Colour:</b> Off white
                </p>
                <p className="mb-1">
                  <b>Shutter finish:</b> Membrane in Matte Finish
                </p>
                <p className="mb-1">
                  <b>Countertop Material:</b> Quartz
                </p>

                {/* Storage Features */}
                <div className="mb-2">
                  <p className="mb-1">
                    <b>Storage Features:</b>
                  </p>

                  <p className="mb-1">
                    - This compact L-shaped kitchen maximizes organized storage
                    with a cohesive, cream-toned cabinet run and gold hardware.
                  </p>

                  <p className="mb-1">
                    - Upper and lower cabinetry provides ample space for dishes,
                    cookware, and pantry staples, while the tall pantry column
                    optimizes vertical storage without crowding work zones.
                  </p>

                  <p className="mb-1">
                    - Drawers and pull-outs under the countertops offer easy
                    access to utensils, bakeware, and small appliances, keeping
                    counters pristine and cooking efficient.
                  </p>
                </div>

                {/* Special Features */}
                <div className="mb-2">
                  <p className="mb-1">
                    <b>Special Features:</b>
                  </p>

                  <p className="mb-1">
                    - The design exudes refined elegance with a soft ivory
                    palette, marble-like backsplash, and warm gold accents.
                  </p>

                  <p className="mb-1">
                    - Integrated appliances—including a sleek range hood and
                    concealed fridge—preserve clean lines, while under-cabinet
                    lighting highlights the workspace.
                  </p>

                  <p className="mb-1">
                    - The dual workstation layout, generous counter space, and
                    thoughtful corner utilities create a functional,
                    magazine-worthy kitchen that blends luxury with everyday
                    practicality.
                  </p>
                </div>

                <p className="mb-1">
                  <b>Ideal for:</b> Small families
                </p>
              </div>
            </div>

            {/* FIXED BOTTOM BUTTON */}
            <button className="btn btn-outline-danger w-100 py-2 rounded-pill fw-semibold mt-auto">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDetails;
