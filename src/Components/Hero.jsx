import React, { useEffect } from "react";

const Hero = () => {
  const scrollToVehicles = () => {
    console.log("Scrolling to vehicles...");
  };

  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax-background");
      const scrollPosition = window.scrollY;
      parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust the speed here
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="parallax-background">
        <video autoPlay loop muted className="background-video">
          <source
            src="https://media.istockphoto.com/id/1437677591/video/animation-of-a-red-car-running-around-a-curve-it-runs-forever-without-interruption.mp4?s=mp4-640x640-is&k=20&c=4mMUeuy492Wx_SV0QJMIAcu3YVTs0b7nrnyWDgBfu1g="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <h2>Your Ryde, Your Way</h2>
        <p>Find the perfect vehicle for your next adventure.</p>
        <form className="delivery-pickup-form">
          <div className="form-group">
            <div className="input-pair">
              <input
                type="text"
                name="delivery-location"
                placeholder="Delivery Location"
                required
              />
              <input
                type="datetime-local"
                name="delivery-time"
                placeholder="Delivery Time"
                required
              />
            </div>

            <div className="input-pair">
              <input
                type="text"
                name="pickup-location"
                placeholder="Pickup Location"
                required
              />
              <input
                type="datetime-local"
                name="pickup-time"
                placeholder="Pickup Time"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn rent-btn"
            onClick={scrollToVehicles}
          >
            Rent Vehicle
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
