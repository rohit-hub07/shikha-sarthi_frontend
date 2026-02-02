import pageConfig from "../data/furniture.json";
import "./template.css";

const Furniture = ({ furnitureKey }) => {
  const config = pageConfig[furnitureKey];

  const items = Array.isArray(config.images)
    ? config.images.map((img, index) => ({
        id: `${config.id}-${index}`,
        src: img.src,
        desc: img.desc,
      }))
    : [
        {
          id: config.id,
          src: config.image,
          desc: config.description,
        },
      ];

  if (!config) return <h2>Page not found</h2>;

  return (
    <div className="container text-start pb-5 mb-2">
      <div className="container my-5">
        <div className="row g-4">
          {/* {Array.isArray(config.images) &&
            config.images.map((item, index) => (
              <div className="col-md-4" key={index}> */}
          {items.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card h-100 shadow-sm border-0">
                {/* Image */}
                <img
                  src={item.src}
                  className="card-img-top"
                  alt={config.name}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                {/* Description */}
                <div className="card-body">
                  <p className="card-text mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Furniture;
