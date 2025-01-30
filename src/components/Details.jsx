import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const { img, price } = location.state || {}; 

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-4">
      {/* Image */}
      <div className="relative w-full md:w-1/2">
        {img ? (
          <img src={img} alt="Car" className="w-full h-auto rounded-lg" />
        ) : (
          <p className="text-red-500">No Image Available</p>
        )}
      </div>

   
      <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600">
          {price ? price : "N/A"}* Onwards
        </h2>

        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
          Get the Best Offer
        </button>

        <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
          <div>
            <strong>Transmission:</strong> Automatic
          </div>
          <div>
            <strong>Fuel Type:</strong> Petrol
          </div>
          <div>
            <strong>Engine:</strong> 1498cc
          </div>
          <div>
            <strong>Seating:</strong> 5 Seater
          </div>
          <div>
            <strong>Airbags:</strong> 6 Airbags
          </div>
          <div>
            <strong>Safety:</strong> Yes
          </div>
        </div>

        <button className="w-full mt-4 bg-gray-300 hover:bg-gray-400 p-2 rounded">
          More Details
        </button>
      </div>
    </div>
  );
}
