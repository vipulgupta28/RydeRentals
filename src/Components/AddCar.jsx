import React from "react";

const AddCar = () => { 
    return (
        <div className="add-car-container">
            <h1>List Your Car for Rent</h1>

            {/* Earnings Estimation */}
            <div className="earnings-estimation-box">
                <h3>Estimated Earnings</h3>
                <p>By renting your car, you can earn approximately <strong>$50/day</strong> depending on the car model and demand.</p>
                <p>The more luxurious or unique your car is, the higher you can set your daily rental rate!</p>
            </div>

            {/* Car Listing Form */}
            <form action="/submit-car-listing" method="POST" className="add-car-form">
                
                {/* Car Company */}
                <div className="form-item">
                    <label htmlFor="car-company">Car Company:</label>
                    <select id="car-company" name="car-company" required>
                        <option value="" disabled selected>Select your car's company</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Ford">Ford</option>
                        <option value="BMW">BMW</option>
                        <option value="Tesla">Tesla</option>
                    </select>
                </div>

                {/* Car Model */}
                <div className="form-item">
                    <label htmlFor="car-model">Car Model:</label>
                    <input type="text" id="car-model" name="car-model" placeholder="e.g., Civic, Model S" required />
                </div>

                {/* Year of Manufacture */}
                <div className="form-item">
                    <label htmlFor="car-year">Year of Manufacture:</label>
                    <input type="number" id="car-year" name="car-year" placeholder="e.g., 2020" required />
                </div>

                {/* Mileage */}
                <div className="form-item">
                    <label htmlFor="car-mileage">Mileage (km):</label>
                    <input type="number" id="car-mileage" name="car-mileage" placeholder="e.g., 30000" required />
                </div>

                {/* Car Features */}
                <div className="form-item">
                    <label htmlFor="car-features">Features (e.g., Air Conditioning, Sunroof, etc.):</label>
                    <textarea id="car-features" name="car-features" placeholder="List your car's features" required></textarea>
                </div>

                {/* Photos */}
                <div className="form-item">
                    <label htmlFor="car-photos">Upload Car Photos:</label>
                    <input type="file" id="car-photos" name="car-photos" multiple required />
                </div>

                {/* Daily Rental Price */}
                <div className="form-item">
                    <label htmlFor="rental-price">Set Your Daily Rental Price ($):</label>
                    <input type="number" id="rental-price" name="rental-price" placeholder="e.g., 50" required />
                </div>

                {/* Security Deposit */}
                <div className="form-item">
                    <label htmlFor="security-deposit">Security Deposit ($):</label>
                    <input type="number" id="security-deposit" name="security-deposit" placeholder="e.g., 200" required />
                </div>

                {/* Policies Agreement */}
                <div className="form-item">
                    <label>
                        <input type="checkbox" name="agreement" required /> I agree to the terms and policies of listing my vehicle.
                    </label>
                </div>

                {/* Submit Button */}
                <div className="form-item">
                    <input type="submit" value="List My Car" />
                </div>
            </form>
        </div>
    );
};

export default AddCar;
