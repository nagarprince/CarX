// src/components/CarDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { carDetails } from "./carsData";

export default function CarDetailsPage() {
  const { carId } = useParams();
  const car = carDetails[carId];

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Car not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-4 flex items-center justify-center">
              <img
                src={car.heroImage}
                alt={car.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">
                  {car.name}
                </h1>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-orange-500">
                    {car.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-600">
                    {car.reviewsCount} Reviews
                  </span>
                </div>
              </div>

              <div className="flex gap-3 text-gray-500 text-xl">
                <button>♡</button>
                <button>↗</button>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {car.description}
            </p>

            <div className="space-y-1">
              <div className="text-2xl font-semibold">{car.price}</div>
              <div className="text-xs text-gray-500">
                *Ex-showroom price in{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  {car.city}
                </span>
              </div>
            </div>

            <button
              className="
                mt-2 inline-flex items-center justify-center
                px-6 py-3 rounded-full
                bg-orange-500 text-white text-sm font-semibold
                hover:bg-orange-600 transition
              "
            >
              View December Offers
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-700">
            
              <span>{car.offerText}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 md:p-7">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Key Specifications of {car.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <SpecItem label="Fuel Type" value={car.specs.fuelType} />
            <SpecItem
              label="Engine Displacement"
              value={car.specs.engineDisplacement}
            />
            <SpecItem label="No. of Cylinders" value={car.specs.cylinders} />
            <SpecItem label="Max Power" value={car.specs.maxPower} />
            <SpecItem label="Max Torque" value={car.specs.torque} />
            <SpecItem
              label="Seating Capacity"
              value={car.specs.seatingCapacity}
            />
            <SpecItem
              label="Transmission Type"
              value={car.specs.transmission}
            />
            <SpecItem label="Boot Space" value={car.specs.bootSpace} />
            <SpecItem
              label="Fuel Tank Capacity"
              value={car.specs.fuelTankCapacity}
            />
            <SpecItem label="Body Type" value={car.specs.bodyType} />
            <SpecItem
              label="Ground Clearance"
              value={car.specs.groundClearance}
            />
          </div>

        
        </div>
        <div className="bg-white rounded-3xl shadow-md p-6 md:p-7">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Key Features of {car.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {car.features.map((f) => (
              <div
                key={f.name}
                className="flex items-center justify-between border-b border-gray-100 py-2"
              >
                <span>{f.name}</span>
                <span className={f.available ? "text-green-600" : "text-red-500"}>
                  {f.available ? "✔" : "✘"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function SpecItem({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-100 py-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
