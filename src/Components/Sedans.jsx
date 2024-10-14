import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Sedans = () => {
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
        <h2>Sedans</h2>
        <div className="car-list">
          <div className="car-card">
            <img
              src="https://media.licdn.com/dms/image/C5112AQEwRVOi1XsHHQ/article-cover_image-shrink_600_2000/0/1553781947495?e=2147483647&v=beta&t=8pK5eApqxV89aslCAGHziD1DTJNj2MljHk83ubjkDyw"
              alt="Economy Car 1"
            />
            <h3>Toyota Corolla</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://i.ytimg.com/vi/G8qtgw5HXAM/sddefault.jpg"
              alt="Economy Car 1"
            />
            <h3>Maruti Suzuki Dzire</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://lh3.googleusercontent.com/VVY9kTZoejTGZEJBbYu_Sw_87qXCPgnQHaHM0qd-jIf9C68IP_-SKta5EguXG0IZegzXyvZdXdJrWNKvLB8nH5_GGZqR14HTLRVS4rFeKYWx=s750"
              alt="Economy Car 1"
            />
            <h3>Honda Amaze</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/139133/aura-exterior-left-front-three-quarter.jpeg?isig=0&q=80"
              alt="Economy Car 1"
            />
            <h3>Hyundai Aura</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://cache1.pakwheels.com/system/car_generation_pictures/7389/original/Front-Side.jpg?1677579932"
              alt="Economy Car 1"
            />
            <h3>Honda City</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://i.ytimg.com/vi/bmAKB1jjFFM/maxresdefault.jpg"
              alt="Economy Car 1"
            />
            <h3>Hyundai Verna</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://cdni.autocarindia.com/ExtraImages/20220303122918_Skoda_Slavia_1.5TSI_front_1.jpg"
              alt="Economy Car 1"
            />
            <h3>Skoda Slavia</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/VW_Virtus_MSI_%28Brazil%2C_front_view%29.png"
              alt="Economy Car 1"
            />
            <h3>Volkswagen Virtus</h3>
            <p>Compact and fuel-efficient, perfect for city drives.</p>
            <button className="rent-btn" onClick={RentCar}>
              Rent Now
            </button>
          </div>

          <div className="car-card">
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tigor/10669/1706792082908/front-left-side-47.jpg"
              alt="Economy Car 1"
            />
            <h3>Tata Tigor</h3>
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

export default Sedans;
