const Banner = () => {
  return (
    <div className="position-relative">
      <img
        src="hero-img.jpg"
        alt="Banner"
        className="banner-img img-fluid w-100"
        style={{ height: "85vh", opacity: "0.7", objectFit: "cover" }}
      />

      <div
        className="banner-text position-absolute top-50 start-50 translate-middle text-center w-100 px-3"
        style={{
          fontWeight: "bold",
        }}
      >
        <h1 className="text-primary display-4 display-md-3 display-lg-2 mb-3 mb-md-4">
          Welcome to Shiksha Sarthi
        </h1>
        <p className="fs-5 fs-md-4 mb-4 mb-md-5">
          "Providing quality education for a better future."
        </p>
      </div>
    </div>
  );
};

export default Banner;
