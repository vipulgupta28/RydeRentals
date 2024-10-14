import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SUV = () => {
  const navigate = useNavigate();

  const RentCar = () => {
    navigate("/rentpage"); // Change to your economy cars route
  };
  return (
    <div className="container">
      {/* Sidebar for Car Categories */}
      <aside className="sidebar">
        <h1>Categories</h1>
        <nav>
          <ul className="category-list">
            <h2>Cars</h2>
            <li>
              <Link to="/economycars">Economy Cars</Link>
            </li>
            <li>
              <Link to="/compactcars">Compact Cars</Link>
            </li>
            <li>
              <Link to="/sedans">Sedan</Link>
            </li>
            <li>
              <Link to="/suv">SUV</Link>
            </li>
            <li>
              <Link to="/luxarycars">Luxury Cars</Link>
            </li>
            <li>
              <Link to="/crossover">CrossOver</Link>
            </li>
            <li>
              <Link to="/sportscars">Sports Cars</Link>
            </li>
            <li>
              <Link to="/electriccars">Electric Cars</Link>
            </li>
            <li>
              <Link to="/hybridcars">Hybrid Cars</Link>
            </li>
            <li>
              <Link to="/minivan">MiniVan</Link>
            </li>

            <hr />
            {/* Repeat for Bikes and Scooters */}

            <h2>Bikes</h2>
            <li>
              <Link to="/standardbikes">Standard Bike</Link>
            </li>
            <li>
              <Link to="/sportsbikes">Sports Bike</Link>
            </li>
            <li>
              <Link to="/cruiserbikes">Cruiser Bike</Link>
            </li>
            <li>
              <Link to="/touringbikes">Touring Bike</Link>
            </li>
            <hr />

            <h2>Scooters</h2>
            <li>
              <Link to="/standardscooters">Standard Scooter</Link>
            </li>
            <li>
              <Link to="/electricscooters">Electric Scooter</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Car Section */}
      <section id="cars" className="car-section">
        <div className="search">
          <input
            type="search"
            id="searchBar"
            placeholder="Search for cars..."
          />
        </div>
        <h2>SUV</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/138895/safari-facelift-exterior-left-rear-three-quarter-40.jpeg?isig=0&q=80"
              alt="Economy Car 1"
            />
            <h3> Tata Safari</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2021-10%2Fj8a6p8ig_exclusive-mahindra-xuv700-mx-entry-variant-review_625x300_11_October_21.jpg&w=3840&q=75"
              alt="Economy Car 1"
            />
            <h3>Mahindra XUV700</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Economy Car 1"
            />
            <h3> Toyota Fortuner</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80"
              alt="Economy Car 1"
            />
            <h3>MG Hector</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.carblogindia.com/wp-content/uploads/2024/08/Mahindra-Thar-Roxx-Front-Three-Quarters-Black.jpg"
              alt="Economy Car 1"
            />
            <h3>Mahindra Thar</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
              alt="Economy Car 1"
            />
            <h3>Tata Harrier</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.jeep-caribbean.com/content/dam/cross-regional/latam/jeep/en_cr/2024/compass/gallery/desktop/my24-jeep-compass-gallery-expanded-4-P2-desktop.jpg.img.1440.jpg"
              alt="Economy Car 1"
            />
            <h3>Jeep Compass</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          {/* Add other economy cars similarly */}
        </div>
      </section>
    </div>
  );
};

export default SUV;
