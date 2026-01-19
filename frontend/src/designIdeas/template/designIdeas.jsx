import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import pageConfig from "../data/designIdeas.json";
import { fetchData } from "../api/api";

import "./template.css";

const Template = ({ pageKey }) => {
  const config = pageConfig[pageKey];
  const [data, setData] = useState([]);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const DESC_LIMIT = 160;

  useEffect(() => {
    if (config?.api) {
      fetchData(config.api).then(setData);
    }
  }, [config]);

  if (!config) return <h2>Page not found</h2>;

  const imageCount = Array.isArray(config.images)
    ? config.images.length
    : config.img
      ? 1
      : 0;

  return (
    <section>
      <p className="text-body-secondary">Showing {imageCount} Results for</p>
      <h1 className="section-heading">{config.title}</h1>
      {/* <p>{config.description}</p> */}
      <div>
        <p>
          {showFullDesc || config.description.length <= DESC_LIMIT
            ? config.description
            : config.description.slice(0, DESC_LIMIT) + "..."}
        </p>

        {config.description.length > DESC_LIMIT && (
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="btn btn-link p-0 text-danger text-decoration-none"
          >
            {showFullDesc ? (
              <>
                Read Less <FaChevronUp size={12} />
              </>
            ) : (
              <>
                Read More <FaChevronDown size={12} />
              </>
            )}
          </button>
        )}
      </div>

      {/* <img
        src={config.img}
        alt={config.title}
        width="300"
      /> */}

      {/* IMAGE SECTION (supports single & multiple images) */}
      {/* <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {config.images?.length ? (
          config.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${config.title} ${index + 1}`}
              width="300"
              loading="lazy"
            />
          ))
        ) : config.img ? (
          <img src={config.img} alt={config.title} width="300" loading="lazy" />
        ) : null}
      </div> */}
      {/* <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {Array.isArray(config.images) &&
          config.images.map((item, index) => (
            <div key={index} style={{ width: "300px" }}>
              <img
                src={item.src}
                alt={item.title}
                width="100%"
                loading="lazy"
              /> */}

      {/* <h6 className="mt-2 mb-1">{item.title}</h6> */}
      {/* <p className="mb-1">{item.shortDesc}</p>
              <p className="mb-1">Size: {item.size}</p>

            </div>
          ))}
      </div> */}

      <div className="row g-4 mt-3">
        {Array.isArray(config.images) &&
          config.images.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                {/* IMAGE */}
                <img
                  src={item.src}
                  className="card-img-top"
                  alt={item.title}
                  loading="lazy"
                />

                {/* CONTENT */}
                <div className="card-body">
                  <p className="mb-1">{item.shortDesc}</p>
                  {item.size && (
                    <p className="mb-2 text-body-secondary">
                      Size: {item.size}
                    </p>
                  )}
                </div>

                {/* FIXED BUTTONS (PER IMAGE) */}
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-danger btn-sm w-50"
                    onClick={() => handleConsult(item)}
                  >
                    Book Free Consultation
                  </button>

                  <button
                    className="btn btn-danger btn-sm w-50"
                    onClick={() => handleQuote(item)}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* CARD LAYOUT */}
      {config.layout === "card" && (
        <div className="grid">
          {data.map((item) => (
            <div key={item._id} className="card">
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* TEXT LAYOUT */}
      {config.layout === "text" && (
        <div>
          {data.map((item) => (
            <p key={item._id}>{item.content}</p>
          ))}
        </div>
      )}
      {/* BUTTONS */}
      {/* <div><button className="btn btn-primary">Primary</button></div>
      <div><button className="btn btn-secondary">Secondary</button></div> */}
    </section>
  );
};

export default Template;
