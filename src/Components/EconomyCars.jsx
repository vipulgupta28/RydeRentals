import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EconomyCars = () => {
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
        <h2>Economy Cars</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://spn-sta.spinny.com/blog/20220228125031/Alto-800-Black.jpg?compress=true&quality=80&w=1200&dpr=2.6"
              alt="Economy Car 1"
            />
            <h3> Maruti Suzuki Alto K10</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://spn-sta.spinny.com/blog/20220314215513/Renault-Kwid.jpg?compress=true&quality=80&w=1200&dpr=2.6"
              alt="Economy Car 1"
            />
            <h3>Renault Kwid</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://i.ytimg.com/vi/SOzHToBIQYY/sddefault.jpg"
              alt="Economy Car 1"
            />
            <h3>Maruti Suzuki S-Presso</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.team-bhp.com/sites/default/files/pictures2024-07/20240717_1852402.jpg"
              alt="Economy Car 1"
            />
            <h3>Tata Tiago</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/2018_Hyundai_Santro_%28India%2C_front_view%29.png"
              alt="Economy Car 1"
            />
            <h3>Hyundai Santro</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://img.indianautosblog.com/2017/07/datsun-redi-GO-1.0-review-white-left-front-three-quarters.jpg"
              alt="Economy Car 1"
            />
            <h3>Datsun Redi-GO</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/53695/new-gen-celerio-exterior-left-front-three-quarter.jpeg?isig=0&q=80"
              alt="Economy Car 1"
            />
            <h3> Maruti Suzuki Celerio</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://spn-sta.spinny.com/blog/20221021155147/i10-nios_front-1-1.jpg?compress=true&quality=80&w=1200&dpr=2.6"
              alt="Economy Car 1"
            />
            <h3>Hyundai Grand i10 Nios</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg/640px-2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg"
              alt="Economy Car 1"
            />
            <h3>Maruti Suzuki WagonR</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/642x361/n/cw/ec/181481/tata-punch-left-front-three-quarter2.jpeg?isig=0&q=75"
              alt="Economy Car 1"
            />
            <h3>Tata Punch</h3>
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

export default EconomyCars;
