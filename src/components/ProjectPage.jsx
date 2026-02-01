import React, { useState } from 'react'
import './ProjectPage.css'
import { Link } from 'react-router-dom';
import projects from "../designIdeas/data/projectPage.json";

const ProjectPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsappUpdates: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="project-page">
      {/* Projects Grid Section */}
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-grid">

            {projects.map((project) => (
              <Link className='project-page-link' to={`/project-details/${project.id}`}>
                <div key={project.id} className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-badge">{project.id} BHK</div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <div className="project-info">
                        <span className="info-label">{project.location}</span>
                        <span className="info-value">{project.rooms}</span>
                      </div>
                    </div>
                    <div className="project-footer">
                      <div className="project-pricing">
                        <span className="pricing-label">Pricing</span>
                        <div className="pricing-details">
                          <span className="price-amount">{project.price}</span>
                          <span className="price-range">{project.size}</span>
                        </div>
                      </div>
                      <button className="project-cta-btn">Get This Design</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Form Section with Background Image */}
      <section className="form-section">
        <div className="form-container">
          <div className="form-image-side">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
              alt="Modern Bedroom Design"
              className="form-bg-image"
            />
          </div>
          <div className="form-content-side">
            <div className="form-wrapper">
              <h2 className="form-title">Designs for Every Budget</h2>
              <p className="form-subtitle">Get your dream home today. Let our experts help you.</p>

              <form onSubmit={handleSubmit} className="consultation-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <div className="phone-input-wrapper">
                  <span className="country-flag">🇮🇳</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input phone-input"
                    required
                  />
                </div>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="whatsappUpdates"
                    checked={formData.whatsappUpdates}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Send me updates on WhatsApp</span>
                </label>
                <select className="form-select" required>
                  <option value="">Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Noida">Noida</option>
                  <option value="Pune">Pune</option>
                </select>
                <button type="submit" className="form-submit-btn">
                  DELIVERED PROJECTS
                </button>
                <p className="form-terms">
                  By submitting this form, you agree to the <a href="/privacy">privacy policy</a> & <a href="/terms">terms and conditions</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectPage