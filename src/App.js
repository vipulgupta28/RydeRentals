import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import { AnimatePresence } from "framer-motion";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Login from "./Components/Login-form";
import Vehicles from "./Components/Vehicles";
import EconomyCars from "./Components/EconomyCars";
import HybridCars from "./Components/HybridCars";
import MiniVan from "./Components/MiniVan";
import ElectricCars from "./Components/ElectricCars";
import SportsCars from "./Components/SportsCars";
import CrossOver from "./Components/CrossOver";
import CompactCars from "./Components/CompactCars";
import LuxaryCars from "./Components/LuxaryCars";
import Sedans from "./Components/Sedans";
import SUV from "./Components/SUV";
import StandardBikes from "./Components/StandardBikes";
import SportsBikes from "./Components/SportsBikes";
import CruiserBikes from "./Components/CruiserBikes";
import TouringBikes from "./Components/TouringBikes";
import StandardScooters from "./Components/StandardScooters";
import ElectricScooters from "./Components/ElectricScooters";
import AddCar from "./Components/AddCar";
import RentPage from "./Components/RentPage";
import SunspotLoaderComponent from "./Components/SunspotLoaderComponent";

// New component to handle routes and animation
function AnimatedRoutes() {
  const location = useLocation(); // useLocation now works inside Router

  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/economycars" element={<EconomyCars />} />
        <Route path="/hybridcars" element={<HybridCars />} />
        <Route path="/compactcars" element={<CompactCars />} />
        <Route path="/luxarycars" element={<LuxaryCars />} />
        <Route path="/electriccars" element={<ElectricCars />} />
        <Route path="/sportscars" element={<SportsCars />} />
        <Route path="/crossover" element={<CrossOver />} />
        <Route path="/minivan" element={<MiniVan />} />
        <Route path="/sedans" element={<Sedans />} />
        <Route path="/suv" element={<SUV />} />
        <Route path="/standardbikes" element={<StandardBikes />} />
        <Route path="/sportsbikes" element={<SportsBikes />} />
        <Route path="/cruiserbikes" element={<CruiserBikes />} />
        <Route path="/touringbikes" element={<TouringBikes />} />
        <Route path="/standardscooters" element={<StandardScooters />} />
        <Route path="/electricscooters" element={<ElectricScooters />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/rentpage" element={<RentPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate data fetching delay
      setLoading(false); // After loading, set it to false
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <SunspotLoaderComponent /> // Show loader while loading
        ) : (
          <>
            <Header /> {/* Header remains static */}
            <AnimatedRoutes /> {/* Animated Routes Component */}
          </>
        )}
      </div>
    </Router>
  );
}
