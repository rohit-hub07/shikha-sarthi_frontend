import React, { useState, useRef, useEffect } from 'react';
import projectDetails from "../designIdeas/data/projectDetails.json";
import { useParams } from 'react-router-dom';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const post = projectDetails.find((p) => p.id == id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    whatsappUpdates: false
  });

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === post.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? post.images.length - 1 : prev - 1
    );
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  // Carousel drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Carousel scroll buttons
  const scrollCarousel = (direction) => {
    const scrollAmount = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Form handlers
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
    // Add your form submission logic here
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  if (!post) {
    return <div className="project-detail-error">Project not found</div>;
  }

  return (
    <div className="project-detail-page">
      {/* Image Gallery */}
      <section className="image-gallery">
        <div className="gallery-grid">
          {post.images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${index === 0 ? 'main-image' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <img src={image} alt={`${post.title} - Image ${index + 1}`} />
              <div className="image-overlay">
                <span className="view-text">Click to view</span>
              </div>
            </div>
          ))}
          {post.images.length > 4 && (
            <div className="gallery-item see-all" onClick={() => openLightbox(0)}>
              <span className="see-all-text">See All</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="content-wrapper">
        <div className="main-content">
          {/* Project Info Section */}
          <section className="project-info">
            <h1 className="project-title">{post.title}</h1>

            <div className="project-meta">
              <div className="location-info">
                <svg className="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C5.243 0 3 2.243 3 5c0 3.188 5 11 5 11s5-7.812 5-11c0-2.757-2.243-5-5-5zm0 7.5c-1.379 0-2.5-1.121-2.5-2.5S6.621 2.5 8 2.5s2.5 1.121 2.5 2.5S9.379 7.5 8 7.5z" fill="currentColor" />
                </svg>
                <span>{post.location}</span>
              </div>
            </div>

            <button className="cta-button">Get Started</button>
          </section>

          {/* Design Highlights */}
          {post.images && post.images.length > 0 && (
            <section className="design-highlights">
              <h2 className="section-title">Design Highlights</h2>

              <div className="carousel-container">
                <button
                  className="carousel-nav prev"
                  onClick={() => scrollCarousel('left')}
                  aria-label="Previous"
                >
                  ‹
                </button>

                <div
                  className="carousel-track"
                  ref={carouselRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                >
                  {post.images.map((image, index) => {

                    console.log("images: ",image)
                    return <div key={index} className="carousel-item">
                      <img
                        src={image}
                        alt={`Design highlight ${index + 1}`}
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', image);
                          e.target.src = 'https://via.placeholder.com/350x250?text=Image+Not+Available';
                        }}
                      />
                      <div className="carousel-caption">
                        <p>Design Element {index + 1}</p>
                      </div>
                    </div>
                  }
                    
                  )}
                </div>

                <button
                  className="carousel-nav next"
                  onClick={() => scrollCarousel('right')}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Enquiry Form */}
        <aside className="sidebar">
          <div className="enquiry-form-card">
            <div className="form-header">
              <h3>Get Similar Interiors</h3>
              <button className="estimate-button">Get Estimate</button>
            </div>

            <h4 className="form-subtitle">Enquire now</h4>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />

              <div className="phone-input-wrapper">
                <span className="country-code">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='15'%3E%3Crect width='20' height='5' fill='%23FF9933'/%3E%3Crect y='5' width='20' height='5' fill='%23FFFFFF'/%3E%3Crect y='10' width='20' height='5' fill='%23138808'/%3E%3C/svg%3E" alt="IN" />
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input phone-input"
                  pattern="[0-9]{10}"
                />
              </div>

              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="form-input"
              >
                <option value="">Select City</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
                <option value="pune">Pune</option>
              </select>

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

              <button type="submit" className="submit-button">
                Enquire
              </button>

              <p className="form-footer">
                By submitting this form, you agree to the{' '}
                <a href="/privacy-policy">privacy policy</a> &{' '}
                <a href="/terms">terms and conditions</a>
              </p>
            </form>
          </div>
        </aside>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              ×
            </button>

            <button className="lightbox-nav prev" onClick={prevImage} aria-label="Previous">
              ‹
            </button>

            <img
              src={post.images[currentImageIndex]}
              alt={`${post.title} - Image ${currentImageIndex + 1}`}
              className="lightbox-image"
            />

            <button className="lightbox-nav next" onClick={nextImage} aria-label="Next">
              ›
            </button>

            <div className="lightbox-counter">
              {currentImageIndex + 1} / {post.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;