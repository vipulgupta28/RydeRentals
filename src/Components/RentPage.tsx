import React, { useState } from "react";

const RentPage = () => {
  const [extraKm, setExtraKm] = useState(0);
  const [extraCost, setExtraCost] = useState(0);
  const dailyRate = 120;
  const rentalDays = 4;
  const securityDeposit = 300;
  const insuranceCost = 60;
  const extraKmCost = 2;

  const handleKmChange = (e) => {
    const km = parseInt(e.target.value);
    setExtraKm(km);
    setExtraCost(km * extraKmCost);
  };

  const totalPrice =
    dailyRate * rentalDays + extraCost + securityDeposit + insuranceCost;

  return (
    <div className="rent-page">
      {/* Left section for car details, reviews, and features */}
      <div className="left-section">
        <div className="vehicle-image">
          <img src="./images/vehicle-image.jpg" alt="Vehicle Image" />
        </div>

        <div className="vehicle-details">
          <h2>Vehicle Name</h2>
          <p>
            <strong>Model:</strong> 2024
          </p>
          <p>
            <strong>Fuel Type:</strong> Diesel
          </p>
          <p>
            <strong>Seating Capacity:</strong> 5
          </p>
          <p>
            <strong>Transmission:</strong> Automatic
          </p>
          <p>
            <strong>Daily Rate:</strong> ${dailyRate}/day
          </p>
        </div>

        {/* Reviews Section */}
        <div className="reviews">
          <h3>
            <div className="stars-title">
              Reviews{" "}
              <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </h3>
          <p>4.0/5 based on 50 reviews</p>

          <div className="user-reviews">
            {/* Review Card */}
            <div className="review-card">
              <div className="review-header">
                <div className="user-info">
                  <h5>John Doe</h5>
                  <p>July 18, 2024</p>
                </div>
                <div className="user-rating">
                  <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>
              <p className="review-text">
                The car was in great condition, and the trip was smooth! I loved
                the customer service.
              </p>
            </div>

            {/* More reviews... */}
          </div>
        </div>

        {/* Features and Benefits */}
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>GPS Navigation</li>
            <li>Bluetooth Audio</li>
            <li>Rearview Camera</li>
            <li>Air Conditioning</li>
          </ul>
        </div>

        {/* Insurance Plans Section */}
        <div className="insurance-section">
          <h4>Insurance Plans</h4>
          <div className="insurance-cards">
            <div className="insurance-card">
              <label>
                <input type="radio" name="insurance" value="0" defaultChecked />
                <div className="insurance-details">
                  <h5>No Insurance</h5>
                  <p>Free</p>
                </div>
              </label>
            </div>

            <div className="insurance-card">
              <label>
                <input type="radio" name="insurance" value="50" />
                <div className="insurance-details">
                  <h5>Basic Plan</h5>
                  <p>$50</p>
                </div>
              </label>
            </div>

            <div className="insurance-card">
              <label>
                <input type="radio" name="insurance" value="100" />
                <div className="insurance-details">
                  <h5>Premium Plan</h5>
                  <p>$100</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Kilometer Adjustment */}
        <div className="kilometer-section">
          <h3>Kilometer Adjustment</h3>
          <p>
            The default kilometers for your trip over these days will be{" "}
            <span id="default-km">300km</span>. If you need extra kilometers, it
            will cost an additional $2 per km.
          </p>

          <label htmlFor="km-range">
            Additional Kilometers: <span id="extra-km">{extraKm}</span> km
          </label>
          <input
            type="range"
            id="km-range"
            min="0"
            max="200"
            value={extraKm}
            onChange={handleKmChange}
          />

          <p>Extra cost for additional kilometers: ${extraCost}</p>
        </div>

        {/* Policy Agreement */}
        <div className="policy-agreement">
          <h3>Rental Agreement</h3>
          <p>
            Please review and agree to the terms and conditions before
            proceeding with your rental:
          </p>
          <ul>
            <li>A refundable security deposit of $300 will be charged.</li>
            <li>
              The vehicle will be provided with a full tank of fuel. Please
              return it with a full tank.
            </li>
            <li>Late returns will incur a charge of $20/hour.</li>
            <li>Basic insurance is included with your rental.</li>
            <li>
              You can cancel your booking up to 24 hours before the rental
              starts for a full refund.
            </li>
          </ul>
          <div className="agreement">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">
              I have read and agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
      </div>

      {/* Right section for price and payment */}
      <div className="right-section">
        <h3>Total Price Breakdown</h3>
        <ul className="price-breakdown">
          <li>
            <strong>Rental Price (4 days):</strong> ${dailyRate * rentalDays}
          </li>
          <li>
            <strong>Extra Kilometers ({extraKm} km):</strong> ${extraCost}
          </li>
          <li>
            <strong>Security Deposit:</strong> ${securityDeposit} (refundable)
          </li>
          <li>
            <strong>Insurance (optional):</strong> ${insuranceCost}
          </li>
        </ul>

        <div className="total-amount">
          <h4>
            Total: <span id="total-price">${totalPrice}</span>
          </h4>
        </div>

        <button className="proceed-btn">Proceed to Pay</button>
      </div>
    </div>
  );
};

export default RentPage;
