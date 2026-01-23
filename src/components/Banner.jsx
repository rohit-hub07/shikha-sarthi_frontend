import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="position-relative">
      <div style={{ opacity: "0.7" }}>
        <Carousel
          images={[
            "/hero-img.jpg",
            "/drawing-competition-img.jpg",
            "/Morning-prayer-img.jpg",
            "/Planting-img.jpg",
            "/Sports-img.jpg"
          ]}
          height="85vh"
          interval={1500}
          transition="fade"
          showIndicators={false}
          showControls={false}
        />
      </div>

      <div
        className="banner-text position-absolute top-50 start-50 translate-middle text-center w-100 px-3"
        style={{
          fontWeight: "bold",
          zIndex: 10,
        }}
      >
        <h1 className="text-primary display-4 display-md-3 display-lg-2 mb-3 mb-md-4">
          Welcome to Shiksha Sarthi
        </h1>
        <p className="fs-5 fs-md-4 mb-4 mb-md-5 text-dark">
          "Providing quality education for a better future."
        </p>
      </div>
    </div>
  );
};

export default Banner;
