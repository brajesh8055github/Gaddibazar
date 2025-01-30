import { useState } from "react";
import data from "./data";

const Filter = () => {
  const [activeTab, setActiveTab] = useState("Brand");

  return (
    <div className="p-6">
      <div className="flex mb-4 flex-wrap gap-2">
        {["Brand", "Budget", "Fuel", "Body Type"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${
              activeTab === tab ? "border-b-2 border-teal-500" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Brand" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.brands.map((brand,index) => (
            <button
            key={index}
            className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
          >
            {brand}
          </button>
          ))}
        </div>
      )}

      {activeTab === "Budget" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.budget.map((budget, index) => (
            <button
              key={index}
              className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
            >
              {budget}
            </button>
          ))}
        </div>
      )}

      {activeTab === "Fuel" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.fuel.map((displacement, index) => (
            <button
              key={index}
              className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
            >
              {displacement}
            </button>
          ))}
        </div>
      )}

      {activeTab === "Body Type" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.bodyOptions.map((bodyStyle, index) => (
            <button
              key={index}
              className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
            >
              {bodyStyle}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;