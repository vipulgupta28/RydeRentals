import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SportsCars = () => {
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
        <h2>Sports Cars</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Economy Car 1"
            />
            <h3> Porsche 911</h3>
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
            <h3>Jaguar F-Type</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=responsiveGallery"
              alt="Economy Car 1"
            />
            <h3> BMW Z4</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://i.ytimg.com/vi/PbSj2JB4Avw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPTt7lDI7BkZ7Q_MdQmy-yn00Tsg"
              alt="Economy Car 1"
            />
            <h3>Mercedes-Benz AMG GT</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://i.ytimg.com/vi/slm31Kg6Cwg/sddefault.jpg"
              alt="Economy Car 1"
            />
            <h3>Audi R8</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://racingadventures.com/wp-content/uploads/2021/09/2020-Chevrolet-Corvette-3LT-Z51-front-three-quarter-in-motion-2.jpg"
              alt="Economy Car 1"
            />
            <h3>Chevrolet Corvette C8</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/2017_Lamborghini_Huracan_LP610.jpg"
              alt="Economy Car 1"
            />
            <h3>Lamborghini Huracán</h3>
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

export default SportsCars;
