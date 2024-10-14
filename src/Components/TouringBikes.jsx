import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TouringBikes = () => {
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
        <h2>Touring Bikes</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://sbkworld.in/wp-content/uploads/2022/06/E586D355-E084-40B1-861E-E88A5E73FDC4-1200x1200.jpeg"
              alt="Economy Car 1"
            />
            <h3>Suzuki V-Strom 650 XT</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>
          {/* Add other economy cars similarly */}

          <div className="car-card">
            <img
              src="https://sbkworld.in/wp-content/uploads/2023/03/FB_IMG_1680009401350.jpg"
              alt="Economy Car 1"
            />
            <h3>Kawasaki Versys 650</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190729044945_Bajaj-Dominar-400.jpg&w=700&c=1"
              alt="Economy Car 1"
            />
            <h3>Bajaj Dominar 400</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/triumph-tiger-900-rally-pro-1.JPG"
              alt="Economy Car 1"
            />
            <h3>Triumph Tiger 900</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://bd.gaadicdn.com/processedimages/bmw/g-310-gs/494X300/g-310-gs6076cf8e3b0de.jpg"
              alt="Economy Car 1"
            />
            <h3>BMW G 310 GS</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/110431/himalayan-450-left-front-three-quarter-2.jpeg?isig=0&q=80"
              alt="Economy Car 1"
            />
            <h3>Royal Enfield Himalayan</h3>
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

export default TouringBikes;
