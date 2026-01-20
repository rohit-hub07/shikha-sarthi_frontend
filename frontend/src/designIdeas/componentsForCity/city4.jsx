import { IoIosArrowForward } from "react-icons/io";

const City4 = () => {
  return (
    <div className="pb-5 mb-2 bg-body-secondary">
      <h2>Interior Price Estimator</h2>
      <p>
        Calculate the approximate cost of doing up your interiors.
      </p>
      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="/image1.png" className="card-img-top" style={{ width: '10vw', height: '20vh' }} alt="We design" />
              <div className="card-body">
                <h5 className="fw-bold">Full Home</h5>
                <p className="text-muted mb-0">
                  Get an approximate costing for your full home.
                </p>
                <button>Calculate <IoIosArrowForward /></button>
              </div>
            </div>
            
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="/image1.png" className="card-img-top" style={{ width: '10vw', height: '20vh' }} alt="We design" />
              <div className="card-body">
                <h5 className="fw-bold">Kitchen</h5>
                <p className="text-muted mb-0">
                  Get an approximate costing for your kitchen.
                </p>
                <button>Calculate <IoIosArrowForward /></button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="/image1.png" className="card-img-top" style={{ width: '10vw', height: '20vh' }} alt="We design" />
              <div className="card-body">
                <h5 className="fw-bold">Wardrobe</h5>
                <p className="text-muted mb-0">
                  Get an approximate costing for your wardrobe.
                </p>
                <button>Calculate <IoIosArrowForward /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City4