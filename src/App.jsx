import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import ServiceSlider from "./Components/ServiceSlider";
import PartnerLogos from "./Components/PartnerLogos";
import HouseCard from "./Components/HouseCard";

function App() {
  return (
    <div
      className="h-[76vh] font-sans bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/pro.jpeg')" }}
    >
      <Navbar />
      {/* Conteneur principal pour LandingPage et ServiceSlider */}
      <div className="flex flex-col md:flex-row h-[50vh] mt-8">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <LandingPage />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <ServiceSlider />
        </div>
      </div>
      <PartnerLogos />
      <HouseCard />
    </div>
  );
}

export default App;
