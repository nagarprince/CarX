import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bodypart from "../assets/skoda.png";
import CarDetail from "../MostPopularCarsSection/CarDetail.jsx";

function MainPart() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchText.trim()) return;
    // 👉 redirect to new page with query
    navigate(`/cars?query=${encodeURIComponent(searchText.trim())}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <div className="relative h-[600px] w-auto mx-auto bg-black rounded-lg border">
        <img
          src={bodypart}
          alt="banner"
          className="h-full w-full object-contain"
        />

        <div
          className="
            absolute left-1/2 bottom-[-680px] -translate-x-1/2
            w-[97%] max-w-7xl
            space-y-4
          "
        >
          <div
            className="
              bg-white rounded-3xl shadow-xl 
              px-6 py-5
              font-display
            "
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Find Your Right Car
              </h2>
            </div>

            <div className="mt-4">
              <div
                className="
                  group                        
                  flex items-center 
                  backdrop-blur-md bg-black/5 
                  border border-black/10 
                  rounded-xl px-4 py-3 
                  transition-all duration-300 
                  hover:bg-black/10 
                  hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]
                "
              >
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type car name, e.g. Kia Seltos"
                  className="w-full bg-transparent text-gray-800 
                             placeholder-gray-500 outline-none"
                />

                <button onClick={handleSearch}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="
                      w-6 h-6 text-gray-700 
                      transition-all duration-300
                      group-hover:text-amber-400
                      group-hover:scale-125
                      group-hover:drop-shadow-[0_0_10px_#fbbf24]
                    "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61 0 7.5 7.5 0 0010.61 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button className="CarSearchBox">Budget</button>
              <button className="CarSearchBox">Body Type</button>
              <button className="CarSearchBox">Fuel Type</button>
              <button className="CarSearchBox">Transmission</button>
              <button className="CarSearchBoxFilter">All Filters</button>
            </div>
          </div>

          <CarDetail />
        </div>
      </div>
    </>
  );
}

export default MainPart;
