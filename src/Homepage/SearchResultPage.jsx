import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResultPage() {
  const query = useQuery().get("query") || "";
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;

    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://carxserver-production.up.railway.app/api/db-cars/search?q=${encodeURIComponent(
          query
        )}`;
        console.log("Fetching:", url);

        const res = await fetch(url, {
          credentials: "include", 
        });

        console.log("Status:", res.status);

        if (!res.ok) {
          setError(`HTTP error: ${res.status}`);
          setCars([]);
          return;
        }

        const data = await res.json();
        console.log("Fetched data:", data);
        setCars(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Failed to load cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">
            Search results for{" "}
            <span className="text-amber-500">"{query}"</span>
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-blue-600  hover:underline"
          >
            ⬅ Back to search
          </button>
        </div>

        {loading && <p className="text-gray-600">Loading cars...</p>}

        {error && (
          <p className="text-red-500 text-sm mb-2">
            {error.includes("401")
              ? "You are not logged in. Please log in and try again."
              : error}
          </p>
        )}

        {!loading && !error && query && cars.length === 0 && (
          <p className="text-gray-500">
            No cars found for this search. Try another name.
          </p>
        )}

        <div className="mt-4 space-y-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* LEFT: image placeholder */}
              <div className="md:w-1/3 bg-gray-200 flex items-center justify-center h-48">
                <span className="text-gray-500 text-sm">
                  Image placeholder
                </span>
              </div>

              {/* RIGHT: specs */}
              <div className="md:w-2/3 p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {car.brand} {car.model}
                    </h2>
                    <p className="text-sm text-gray-500">{car.carName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600">
                      ₹ {car.sellingPrice?.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-gray-500">Selling price</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  <span className="px-2 py-1 bg-gray-100 rounded-md">
                    {car.fuelType}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">
                    {car.transmission}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">
                    {car.kmDriven} km driven
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">
                    {car.seats} seats
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">
                    {car.engine} cc
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">
                    {car.mileage} kmpl
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResultPage;
