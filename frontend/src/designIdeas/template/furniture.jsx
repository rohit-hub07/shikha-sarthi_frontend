import pageConfig from "../data/furniture.json";
import "./template.css";

const Furniture = () => {
  const allFurnitureItems = Object.values(pageConfig).flat();

  return (
    <div className="container text-start pb-5 mb-2">
      <div className="container my-5">
        <div className="row g-4">
          {allFurnitureItems.map((item, index) => (
            <div className="col-md-4" key={`${item.id}-${index}`}>
              <div className="card h-100 shadow-sm border-0">
                {/* Image */}
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                {/* Description */}
                <div className="card-body">
                  <p className="card-text mb-0">{item.description}</p>
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
