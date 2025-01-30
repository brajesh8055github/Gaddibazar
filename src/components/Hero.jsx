import hero from "../Photos/car-1724316460.png";
export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
        
        {/* Image on Top in Mobile */}
        <div className="flex justify-center md:order-2">
          <img
            src={hero}
            alt="Car"
            className="w-full max-w-lg drop-shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl font-light text-gray-700">
            Find Your <br />
            <span className="font-bold text-black">Dream Car</span>
          </h1>
          <div className="w-16 h-1 bg-blue-500"></div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4 flex-wrap justify-center md:justify-start">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
              New Cars
            </button>
            <button className="bg-white border px-4 py-2 rounded-lg shadow-md">
              Used Cars
            </button>
            <button className="bg-white border px-4 py-2 rounded-lg shadow-md">
              Sell a Car
            </button>
            <button className="bg-white border px-4 py-2 rounded-lg shadow-md">
              Auction
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-2 bg-white shadow-lg rounded-lg p-3 w-full max-w-md">
            <input
              type="text"
              placeholder="Search Cars or Brands"
              className="flex-1 p-2 outline-none text-gray-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Find Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
