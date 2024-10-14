import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StandardScooters = () => {
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
            placeholder="Search for Scooters..."
          />
        </div>
        <h2>Standard Scooters</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/44686/activa-6g-left-rear-three-quarter.jpeg?q=80"
              alt="Economy Car 1"
            />
            <h3>Honda Activa 6G</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>
          {/* Add other economy cars similarly */}

          <div className="car-card">
            <img
              src="https://images.hindustantimes.com/auto/img/2024/08/24/1600x900/TVS_Jupiter_30_1724488952871_1724489016175.jpg"
              alt="Economy Car 1"
            />
            <h3>TVS Jupiter</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/IMG_20231029_145415.jpg"
              alt="Economy Car 1"
            />
            <h3>Suzuki Access 125</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.riyasakwala.lk/public/images/vehicle_ad/1713/AD0001720-2.jpg"
              alt="Economy Car 1"
            />
            <h3>Hero Pleasure+</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StandardScooters;
