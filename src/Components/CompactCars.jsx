import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CompactCars = () => {
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
        <h2>Compact Cars</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228134846/Swift-spinny.jpg"
              alt="Economy Car 1"
            />
            <h3> Maruti Suzuki Swift</h3>
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
              src="https://www.timesbull.com/wp-content/uploads/2024/08/Maruti-Baleno-2-jpeg.webp"
              alt="Economy Car 1"
            />
            <h3>Maruti Suzuki Baleno</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hyundai_i20_%28BC3%29_Facelift_IMG_8594.jpg/800px-Hyundai_i20_%28BC3%29_Facelift_IMG_8594.jpg"
              alt="Economy Car 1"
            />
            <h3> Hyundai i20</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Tata_Altroz_front_20230617.jpg"
              alt="Economy Car 1"
            />
            <h3>Tata Altroz</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2828%2F577627%2Fcover_image-20230715124356.jpeg&w=750&q=75"
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg/640px-2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg"
              alt="Economy Car 1"
            />
            <h3> Maruti Suzuki WagonR</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://img.indianautosblog.com/crop/1200x675/2020/11/25/all-new-nissan-magnite-first-review-action-front-260e.jpg"
              alt="Economy Car 1"
            />
            <h3>Nissan Magnite</h3>
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

export default CompactCars;
