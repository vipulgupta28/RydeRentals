import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CruiserBikes = () => {
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
            placeholder="Search for Bikes..."
          />
        </div>
        <h2>Cruiser Bikes</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220211103431_Yezdi4.jpg&w=700&c=1"
              alt="Economy Car 1"
            />
            <h3>Yezdi Roadster</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>
          {/* Add other economy cars similarly */}

          <div className="car-card">
            <img
              src="https://www.jansatta.com/wp-content/uploads/2022/08/Second-Hand-Bajaj-Avenger-Cruise-220.jpg"
              alt="Economy Car 1"
            />
            <h3>Bajaj Avenger Cruise 220</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://pune.news/wp-content/uploads/2023/09/Jawa-42.webp"
              alt="Economy Car 1"
            />
            <h3>Jawa 42</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://stat.overdrive.in/wp-content/uploads/2023/08/Triumph-Speed-400-vs-RE-Hunter-350-vs-RE-Classic-350-4-900x506.jpg"
              alt="Economy Car 1"
            />
            <h3>Royal Enfield Classic 350</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/51245/meteor-350-right-front-three-quarter.jpeg"
              alt="Economy Car 1"
            />
            <h3>Royal Enfield Meteor 350</h3>
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

export default CruiserBikes;
