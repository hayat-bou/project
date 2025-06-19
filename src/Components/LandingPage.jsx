import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full text-white p-10 flex flex-col justify-center">
      <h1 className="text-5xl font-bold leading-tight">
        Choose Your <br /> Best Happy Land
      </h1>
      <p className="mt-3 text-white text-base">
        Real Estate & Properties For Sale Or Rent In 12+ Countries
      </p>

      <div className="flex gap-5 mt-6 text-black">
        <select className="px-10 py-2 rounded-lg border border-gray-300">
          <option>Show all</option>
        </select>
        <select className="px-10 py-2 rounded-lg border border-gray-300">
          <option>Any price</option>
        </select>
        <button
          className="text-black px-10 py-2 rounded-lg"
          style={{ backgroundColor: "#66ff00" }}
        >
          Search
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <button className="text-sm border px-6 py-1 rounded-full">
          Buy a home
        </button>
        <button className="text-sm border px-6 py-2 rounded-full">
          Rent a home
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
