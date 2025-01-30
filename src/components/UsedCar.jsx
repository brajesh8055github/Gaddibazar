import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data";

const UsedCar = () => {
  const [filteredProducts] = useState(data.products);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const CardHandler = (product) => {
    navigate("/details", {
      state: {
        img: product.image, 
        price: product.price, 
      },
    });
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Popular Used Cars
      </h2>
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory bike"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white shadow-md rounded-md flex-shrink-0 cursor-pointer snap-center"
              onClick={() => CardHandler(product)} 
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="bg-gray-100 p-2">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                

<div className="flex flex-col md:flex-row justify-between gap-4 ">
  <div>
    <p className="text-teal-500 font-medium">
      {product.price} <span className="text-gray-400">Onwards</span>
    </p>
    <p className="text-gray-500 text-sm">Ex-Showroom price</p>
  </div>
  <div className="text-right md:text-left">
    <p className="text-gray-500 text-sm">EMI starts at</p>
    <p className="font-semibold">₹38,629</p>
  </div>
</div>

              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <div className="text-center my-2">
      <button className="border border-dotted px-4 py-2 rounded text-blue-300">View more</button>
      </div>
    </div>
  );
};

export default UsedCar;