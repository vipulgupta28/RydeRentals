import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LuxaryCars = () => {
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
        <h2>Luxary Cars</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://www.financialexpress.com/wp-content/uploads/2016/03/Mercedes-Benz-S-Class-2021-india-launch-amg-line.jpg?w=1024"
              alt="Economy Car 1"
            />
            <h3> Mercedes-Benz S-Class</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/BMW_730d_%28G11%2C_Facelift%29_%E2%80%93_f_16012021.jpg"
              alt="Economy Car 1"
            />
            <h3>BMW 7 Series</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
              alt="Economy Car 1"
            />
            <h3> Audi A8 L</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Jaguar_XJ_vs._Jetman_-_World-First_Desert_Drag_Race_%2822928441043%29_%28cropped%29.jpg"
              alt="Economy Car 1"
            />
            <h3>Jaguar XJ</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2019_Lexus_LS_500_AWD_beige%2C_front_Hagerty_6.1.19.jpg/1200px-2019_Lexus_LS_500_AWD_beige%2C_front_Hagerty_6.1.19.jpg"
              alt="Economy Car 1"
            />
            <h3>Lexus LS</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQQmk1sbqH5PPfkTqpQQQevr08DlciP1Hvg&s"
              alt="Economy Car 1"
            />
            <h3>Range Rover Autobiography</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lamborghini_Urus_19.09.20_JM_%282%29_%28cropped%29.jpg/1200px-Lamborghini_Urus_19.09.20_JM_%282%29_%28cropped%29.jpg"
              alt="Economy Car 1"
            />
            <h3>Lamborghini Urus</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2019_BMW_M850i_xDrive%2C_front_1.23.20.jpg/280px-2019_BMW_M850i_xDrive%2C_front_1.23.20.jpg"
              alt="Economy Car 1"
            />
            <h3>BMW 8 series</h3>
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

export default LuxaryCars;
