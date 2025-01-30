import car from "../Photos/car.png";

const Sale = () => {
  return (
    <section className="bg-gray-100 p-6 md:p-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Left Side (Text) */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-5xl font-light">
            Sell Your Cars at <br />
            <span className="font-bold">Best Price!</span>
          </h2>
          <h3 className="text-blue-600 text-4xl font-bold">GaadiBazaar</h3>
          <p className="text-gray-600">
            is a trusted platform to sell your cars to verified buyers and get the best value.
          </p>
        </div>

        {/* Right Side (Car Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img src={car} alt="Car" className="w-full max-w-lg" />
        </div>
      </div>

      {/* Registration Form */}
      <div className="mt-8 flex justify-center">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
          <h4 className="text-xl font-bold">GaadiBazaar</h4>
          <p className="text-gray-700 text-sm font-semibold">
            VEHICLE REGISTRATION NUMBER
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter the Registration Number"
              className="border p-3 flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-5 py-3 rounded-md font-bold hover:bg-blue-700 transition w-full sm:w-auto">
              Enter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
