import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StandardBikes = () => {
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
        <h2>Standard Bikes</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/642x361/n/cw/ec/123615/hero-splendor-plus-left-side-view1.jpeg?isig=0&wm=2&q=75"
              alt="Economy Car 1"
            />
            <h3>Hero Splendor Plus</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>
          {/* Add other economy cars similarly */}

          <div className="car-card">
            <img
              src="https://i.ytimg.com/vi/C8EGu5amSWo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYh79jNWhKzCr57eVc5klUzppYEA"
              alt="Economy Car 1"
            />
            <h3>Bajaj Pulsar 150</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://images.indialisted.com/nlarge/honda_cb_shine_het_2015_model_grey_colour_rs_62_000_3517636.jpg"
              alt="Economy Car 1"
            />
            <h3>Honda CB Shine</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2019-12%2Fptkerr5c_bs6-tvs-apache-rtr-160-4v_625x300_11_December_19.jpg&w=3840&q=75"
              alt="Economy Car 1"
            />
            <h3>TVS Apache RTR 160</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://stat.overdrive.in/wp-content/odgallery/2017/01/32577_Honda%20CB%20Unicorn%20150_010.JPG"
              alt="Economy Car 1"
            />
            <h3>Honda Unicorn</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/4/407562779/MF/IE/FP/70902426/img-20210414-125148-min-scaled-500x500.jpg"
              alt="Economy Car 1"
            />
            <h3>Bajaj Platina 100</h3>
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

export default StandardBikes;
