import React, { useState, useEffect, useRef } from "react";

/**
 * Bootstrap-based Image Carousel Component
 * 
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs or paths
 * @param {number} props.interval - Auto-slide interval in milliseconds (default: 3000)
 * @param {boolean} props.showIndicators - Show dot indicators (default: true)
 * @param {boolean} props.showControls - Show prev/next controls (default: true)
 * @param {string} props.height - Height of carousel (default: "400px")
 * @param {string} props.transition - Transition type: "slide" or "fade" (default: "slide")
 */
const Carousel = ({
  images = [],
  interval = 3000,
  showIndicators = true,
  showControls = true,
  height = "400px",
  transition = "slide"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Handle auto-slide
  useEffect(() => {
    if (!isPaused && images.length > 1) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [activeIndex, isPaused, images.length, interval]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("keydown", handleKeyDown);
      return () => carouselElement.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="alert alert-warning" role="alert">
        No images available for carousel
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      className={`carousel ${transition === "fade" ? "carousel-fade" : "slide"} position-relative`}
      style={{ height }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex="0"
    >
      {/* Carousel Inner */}
      <div className="carousel-inner h-100">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item h-100 ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100 h-100"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Previous Control */}
      {showControls && images.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next Control */}
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
            aria-label="Next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
