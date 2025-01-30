import download from "../Photos/mobile-app.webp";
const Download = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side (Text) */}
        <div className="text-center md:text-left md:w-1/2 space-y-3">
          <h2 className="text-3xl font-bold">Download the GaadiBazaar</h2>
          <h2 className="text-3xl font-bold text-blue-600">Mobile App</h2>
          <p className="text-gray-700 text-lg">
            for faster, easier and exclusive deals
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img src={download} alt="GaadiBazaar Mobile App" className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Download;
