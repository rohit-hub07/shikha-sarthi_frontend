import pageConfig from "../data/furniture.json";
import { fetchData } from "../api/api";

import './template.css'

const Furniture = () => {
  return (
    <div className="container text-start pb-5 mb-2">
      <h2>Bought a new home?</h2>
      <p>
        Get interiors that your family members and friends would love. Our
        interior designers in Jaipur can make that happen!
      </p>
      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="/img1.jpg" className="card-img-top" alt="We design" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="/img2.jpg" className="card-img-top" alt="We curate" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="/img3.jpg" className="card-img-top" alt="We deliver" />
            </div>
          </div>
        </div>
      </div>
      <p>*The prices include only modular interiors for new homes.</p>
    </div>
  )
}

export default Furniture