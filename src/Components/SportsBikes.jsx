import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SportsBikes = () => {
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
        <h2>Sports Bikes</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://preview.redd.it/price-check-2013-honda-cbr250r-v0-742yg9bn9udc1.jpg?width=1080&crop=smart&auto=webp&s=88cfe83e68e9e6fa3e721f2fed085f4d57351fd4"
              alt="Economy Car 1"
            />
            <h3>Honda CBR 250R</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>
          {/* Add other economy cars similarly */}

          <div className="car-card">
            <img
              src="https://i0.wp.com/lendennews-assets.s3.amazonaws.com/wp-content/uploads/2022/04/14134208/Yamaha-MT-15-V2-bike-2422.jpeg?fit=655%2C490&ssl=1"
              alt="Economy Car 1"
            />
            <h3>Yamaha MT-15</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://i.ytimg.com/vi/iCaAgv3lTY8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgTihIMA8=&rs=AOn4CLBMJNSfbD5YAKNU2Gdbz30INlQ4IA"
              alt="Economy Car 1"
            />
            <h3>Kawasaki Ninja ZX-10R</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/pulsarrs200/bike-gallery/mobile-img/popup_images_pulsarrs200_5.jpg"
              alt="Economy Car 1"
            />
            <h3>Bajaj Pulsar RS200</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://images.hindustantimes.com/auto/auto-images/bikes/yamaha/yamaha-r15v4/exterior_yamaha-R15-V4_front-left-view_600x400.jpg"
              alt="Economy Car 1"
            />
            <h3>Yamaha YZF R15 V4</h3>
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

export default SportsBikes;
