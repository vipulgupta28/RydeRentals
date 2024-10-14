import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Vehicles = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRentEconomy = () => {
    navigate("/economycars"); // Change to your economy cars route
  };

  const handleRentHybrid = () => {
    navigate("/hybridcars"); // Change to your economy cars route
  };

  const handleRentLuxary = () => {
    navigate("/luxarycars"); // Change to your economy cars route
  };

  const handleRentMinivan = () => {
    navigate("/minivan"); // Change to your economy cars route
  };

  const handleRentSedans = () => {
    navigate("/sedans"); // Change to your economy cars route
  };

  const handleRentSports = () => {
    navigate("/sportscars"); // Change to your economy cars route
  };

  const handleRentCompact = () => {
    navigate("/compactcars"); // Change to your economy cars route
  };

  const handleRentCrossOver = () => {
    navigate("/crossover"); // Change to your economy cars route
  };

  const handleRentElectric = () => {
    navigate("/electriccars"); // Change to your economy cars route
  };

  const handleRentSUV = () => {
    navigate("/suv"); // Change to your economy cars route
  };

  const handleRentStandardBikes = () => {
    navigate("/standardbikes"); // Change to your economy cars route
  };

  const handleRentSportsBikes = () => {
    navigate("/sportsbikes"); // Change to your economy cars route
  };

  const handleRentCruiserBikes = () => {
    navigate("/cruiserbikes"); // Change to your economy cars route
  };

  const handleRentTouringBikes = () => {
    navigate("/touringbikes");
  };

  const handleRentStandardScooters = () => {
    navigate("/standardscooters");
  };

  const handleRentElectricScooters = () => {
    navigate("/electricscooters");
  };

  return (
    <section id="vehicles" className="vehicle-section">
      <h2>Available Vehicles</h2>

      {/* Cars Section */}
      <h3>Cars</h3>
      <div className="vehicle-list">
        <div className="vehicle-card">
          <img
            src="https://w1.pngwing.com/pngs/525/136/png-transparent-luxury-suzuki-car-suzuki-swift-szt-sz-t-manual-transmission-suzuki-swift-sz3-boosterjet-thumbnail.png"
            alt="Economy Cars"
            className="car"
          />
          <h3>Economy Cars</h3>
          <p>
            Affordable and comfortable, perfect for budget-conscious travelers.
          </p>
          <button className="rent-btn" onClick={handleRentEconomy}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/508/215/png-transparent-car-hyundai-motor-company-hyundai-elite-i20-%C5%A0koda-fabia-car-compact-car-car-automatic-transmission-thumbnail.png" alt="Compact Cars" />
          <h3>Compact Cars</h3>
          <p>Ideal for city driving, offering convenience and efficiency.</p>
          <button className="rent-btn" onClick={handleRentCompact}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/55/306/png-transparent-hyundai-verna-hyundai-motor-company-car-hyundai-i20-hyundai-verna-compact-car-sedan-car-thumbnail.png" alt="Sedan" className="sedan" />
          <h3>Sedan</h3>
          <p>
            A balance of comfort and space, perfect for long drives and family
            trips.
          </p>
          <button className="rent-btn" onClick={handleRentSedans}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/106/448/png-transparent-silver-toyota-fortuner-toyota-fortuner-sport-utility-vehicle-car-toyota-vios-toyota-suv-car-glass-car-accident-white-thumbnail.png" alt="SUV" className="SUV" />
          <h3>SUV</h3>
          <p>
            Ideal for families and adventure seekers who need extra space and
            versatility.
          </p>
          <button className="rent-btn" onClick={handleRentSUV}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/223/220/png-transparent-mercedes-benz-e-class-luxury-vehicle-car-2014-mercedes-benz-s-class-mercedes-compact-car-sedan-car-thumbnail.png" alt="Luxury Cars" />
          <h3>Luxury Cars</h3>
          <p>
            Experience the pinnacle of comfort and style with our premium
            selection.
          </p>
          <button className="rent-btn" onClick={handleRentLuxary}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/135/521/png-transparent-kia-sonet-thumbnail.png" alt="Crossover" />
          <h3>Crossover</h3>
          <p>
            Versatile and spacious, perfect for families and adventures alike.
          </p>
          <button className="rent-btn" onClick={handleRentCrossOver}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/459/333/png-transparent-2018-bmw-m3-car-bmw-x6-bmw-7-series-bmw-logo-compact-car-sedan-performance-car-thumbnail.png" alt="Sports Cars" />
          <h3>Sports Cars</h3>
          <p>
            High-performance and thrilling for the ultimate driving experience.
          </p>
          <button className="rent-btn" onClick={handleRentSports}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/274/992/png-transparent-electric-vehicle-electric-car-electricity-car-compact-car-car-mode-of-transport-thumbnail.png" alt="Electric Cars" />
          <h3>Electric Cars</h3>
          <p>
            Eco-friendly and efficient, perfect for a smooth and sustainable
            drive.
          </p>
          <button className="rent-btn" onClick={handleRentElectric}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/342/201/png-transparent-black-toyota-innova-toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-leave-the-material-automatic-transmission-transport-thumbnail.png" alt="Hybrid Cars" />
          <h3>Hybrid Cars</h3>
          <p>
            Combining fuel efficiency with power, ideal for eco-conscious
            travelers.
          </p>
          <button className="rent-btn" onClick={handleRentHybrid}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/102/513/png-transparent-toyota-hiace-car-toyota-alphard-minivan-toyota-van-car-mode-of-transport-thumbnail.png" alt="Minivan" />
          <h3>Minivan</h3>
          <p>Spacious and perfect for family trips or group travel.</p>
          <button className="rent-btn" onClick={handleRentMinivan}>
            {" "}
            Rent Now
          </button>
        </div>
        
      </div>

      {/* Bikes Section */}
      <h3>Bikes</h3>
      <div className="vehicle-list">
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/535/852/png-transparent-car-hero-honda-karizma-r-hero-motocorp-motorcycle-hero-honda-achiever-hero-bike-thumbnail.png" alt="Standard Bike" />
          <h3>Standard Bike</h3>
          <p>
            A perfect balance of comfort and performance for daily rides and
            adventures.
          </p>
          <button className="rent-btn" onClick={handleRentStandardBikes}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/650/529/png-transparent-sport-bike-motorcycle-yamaha-motor-company-car-black-yamaha-yzf-r6-sport-motorcycle-bike-exhaust-system-car-motorcycle-thumbnail.png" alt="Sports Bike" />
          <h3>Sports Bike</h3>
          <p>Designed for speed and agility, ideal for thrilling rides.</p>
          <button className="rent-btn" onClick={handleRentSportsBikes}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/8/31/png-transparent-red-gray-and-black-cruiser-motorcycle-illustration-harley-davidson-cvo-motorcycle-harley-davidson-sportster-harley-davidson-motorcycle-bike-custom-motorcycle-vehicle-harleydavidson-thumbnail.png" alt="Cruiser Bike" />
          <h3>Cruiser Bike</h3>
          <p>Perfect for relaxed and comfortable long-distance rides.</p>
          <button className="rent-btn" onClick={handleRentCruiserBikes}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/372/438/png-transparent-dual-sport-motorcycle-royal-enfield-himalayan-enfield-cycle-co-ltd-motorcycle-bicycle-car-motorcycle-thumbnail.png" alt="Touring Bike" />
          <h3>Touring Bike</h3>
          <p>Designed for ultimate comfort during long-distance journeys.</p>
          <button className="rent-btn" onClick={handleRentTouringBikes}>
            Rent Now
          </button>
        </div>
      </div>

      {/* Scooters Section */}
      <h3>Scooters</h3>
      <div className="vehicle-list">
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/585/824/png-transparent-scooter-honda-activa-car-motorcycle-scooter-angle-vehicle-honda-pcx-thumbnail.png" alt="Standard Scooter" />
          <h3>Standard Scooter</h3>
          <p>Easy to ride and perfect for city commutes.</p>
          <button className="rent-btn" onClick={handleRentStandardScooters}>
            Rent Now
          </button>
        </div>
        <div className="vehicle-card">
          <img src="https://w7.pngwing.com/pngs/608/630/png-transparent-electric-vehicle-car-electric-motorcycles-and-scooters-china-motor-corporation-electric-bicycle-car-scooter-car-motorcycle-thumbnail.png" alt="Electric Scooter" />
          <h3>Electric Scooter</h3>
          <p>Eco-friendly and efficient. Good option for city commutes.</p>
          <button className="rent-btn" onClick={handleRentElectricScooters}>
            Rent Now
          </button>
        </div>
      </div>

      {/* Bicycles Section */}
    </section>
  );
};

export default Vehicles;
