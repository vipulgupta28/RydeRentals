// Components/SunspotLoaderComponent.js
import React from "react";
import { SunspotLoader } from "react-awesome-loaders";

const SunspotLoaderComponent = () => {
  return (
    <SunspotLoader
      gradientColors={["#6366F1", "#E0E7FF"]} // Set gradient colors
      shadowColor={"#3730A3"} // Set shadow color
      desktopSize={"40px"} // Set size for desktop
      mobileSize={"100px"} // Set size for mobile
    />
  );
};

export default SunspotLoaderComponent;
