// src/components/MostpopularCarSection/CarDetail.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { carsByType } from "../carsData";

const tabs = ["SUV", "Hatchback", "Sedan", "MUV", "Luxury"];

export default function CarDetail() {
  const [activeTab, setActiveTab] = useState("SUV");
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animKey, setAnimKey] = useState(0);
  const navigate = useNavigate(); 

  const VISIBLE_COUNT = 4;

  useEffect(() => {
    setStartIndex(0);
  }, [activeTab]);

  const cars = carsByType[activeTab] || [];
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + VISIBLE_COUNT < cars.length;

  const visibleCars = cars.slice(startIndex, startIndex + VISIBLE_COUNT);

  const handleNext = () => {
    if (!canGoNext) return;
    setDirection("right");
    setStartIndex((prev) =>
      Math.min(prev + 1, cars.length - VISIBLE_COUNT)
    );
    setAnimKey((k) => k + 1);
  };

  const handlePrev = () => {
    if (!canGoPrev) return;
    setDirection("left");
    setStartIndex((prev) => Math.max(prev - 1, 0));
    setAnimKey((k) => k + 1);
  };

  const slideClass = direction === "right" ? "slide-right" : "slide-left";

  return (
  
    <div className="bg-white rounded-3xl shadow-xl px-6 py-4">
      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
        The Most Searched Cars
      </h3>

      <div className="border-b border-gray-200 flex gap-6 text-sm font-medium mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 relative ${
              activeTab === tab
                ? "text-orange-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 -bottom-[1px] h-[3px] w-full rounded-full bg-orange-500" />
            )}
          </button>
        ))}
      </div>

      <div className="relative mt-4">
        <div
          key={animKey}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${slideClass}`}
        >
          {visibleCars.map((car) => (
            <div
              key={car.id} 
              onClick={() => navigate(`/home/car/${car.id}`)} 
              className="
                group
                rounded-3xl border border-gray-200 
                overflow-hidden shadow-sm bg-white 
                transition-all duration-300 ease-out
                hover:bg-gradient-to-br hover:from-black hover:to-red-500
                hover:shadow-xl hover:scale-[1.02]
                cursor-pointer
              "
            >
              <div className="mt-2 flex items-center justify-center px-4">
                <div
                  className="
                    bg-gray-50 rounded-2xl w-full h-40
                    flex items-center justify-center overflow-hidden
                    transition-all duration-300
                    group-hover:bg-white
                  "
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="px-4 pt-4 pb-3 border-t border-gray-100 mt-3 transition-colors duration-300">
                <div className="text-sm font-semibold text-gray-900 group-hover:text-white">
                  {car.name}
                </div>

                <div className="text-sm text-gray-700 mt-1 group-hover:text-white/90">
                  {car.price}
                </div>

                <button
                  className="
                    mt-4 w-full text-sm font-medium
                    border border-orange-500 text-orange-500
                    rounded-full py-2 bg-white
                    transition-all duration-300
                    group-hover:bg-white group-hover:text-red-600
                  "
                >
                  View Offers
                </button>
              </div>
            </div>
          ))}
        </div>

        {canGoPrev && (
          <button
            onClick={handlePrev}
            className="hidden lg:flex items-center justify-center absolute left-[-26px] top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-50 hover:scale-105 transition-transform"
          >
            <span className="text-2xl text-gray-500">&lt;</span>
          </button>
        )}

        {canGoNext && (
          <button
            onClick={handleNext}
            className="hidden lg:flex items-center justify-center absolute right-[-26px] top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-50 hover:scale-105 transition-transform"
          >
            <span className="text-2xl text-gray-500">&gt;</span>
          </button>
        )}
      </div>

      <div className="mt-4">
        <button className="text-sm font-medium text-orange-500 hover:underline flex items-center gap-1">
          View All {activeTab} Cars <span>›</span>
        </button>
      </div>
    </div>
  );
}
