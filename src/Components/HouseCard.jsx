import React from "react";

const BedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block mr-1 text-black/60"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M2 12h20v2H2zm0 4h20v2H2zm2-8h2v2H4zm0-4h2v2H4zm4 4h12v2H8z" />
  </svg>
);

const MeterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block mr-1 text-black/60"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10V6h-2v6H7v2h6v-2z" />
  </svg>
);

const HouseCard = () => {
  return (
    <div className="rounded-xl p-6 w-[320px] h-[130px] items-center gap-4 -mt-24">
      <img
        src="/public/maison.jpg"
        alt="House"
        className="h-20 w-28 object-cover rounded-md -mt-2"
      />

      <div className="flex flex-col justify-between h-full py-1 flex-1">
        <h3 className="text-base text-black/60 font-medium">
          Jakarta Barat, Indonesia
        </h3>

        <div className="flex gap-6 text-base text-black/60 mt-1">
          <span className="flex items-center">
            <BedIcon />
            4 bed
          </span>
          <span className="flex items-center">
            <MeterIcon />
            120 m²
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-black/90 mt-1">
          <span className="font-bold">$5,200,000</span>
          <button className="ml-auto text-base bg-[#b1d46c] hover:bg-green-700 text-white text-[10px] px-3 py-1 rounded transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
