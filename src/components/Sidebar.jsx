import { useState } from "react";

const categories = [
  { name: "Nike", count: 2 },
  { name: "Airmax", count: 48 },
  { name: "Adidas", count: 15 },
  { name: "Vans", count: 23 },
  { name: "All Stars", count: 1 },
];

const brands = ["Nike", "Adidas", "Siemens"];
const colors = ["blue", "red", "black", "yellow", "pink", "gray"];

const Sidebar = ({ onFilter }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([10, 200]);
  const [activeColor, setActiveColor] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);

  const applyFilters = (filterType, value) => {
    if (filterType === "category") setActiveCategory(value);
    if (filterType === "price") setPriceRange(value);
    if (filterType === "color") setActiveColor(value);
    if (filterType === "brand") setActiveBrand(value);

    onFilter({
      category: filterType === "category" ? value : activeCategory,
      price: filterType === "price" ? value : priceRange,
      color: filterType === "color" ? value : activeColor,
      brand: filterType === "brand" ? value : activeBrand,
    });
  };

  return (
    <aside className="w-64 p-4 border-r bg-white min-h-screen flex flex-col justify-between space-y-6">
      <div>
        {/* Categories */}
       <div className="bg-gray-50 p-4 rounded mb-6 min-h-[250px] space-y-10">
  <h2 className="font-semibold mb-3">Hot Deals</h2>
  <ul className="space-y-3 text-gray-600 leading-relaxed">
    {categories.map((cat, idx) => (
      <li
        key={idx}
        onClick={() => applyFilters("category", cat.name)}
        className={`flex justify-between cursor-pointer px-2 py-2 rounded ${
          activeCategory === cat.name ? "text-blue-600 font-semibold" : ""
        }`}
      >
        <span>{cat.name}</span>
        <span className="text-gray-500">{cat.count}</span>
      </li>
    ))}
  </ul>
</div>

        {/* Price Filter */}
        <div className="bg-gray-50 p-4 rounded mb-6 space-y-7">
          <h2 className="font-semibold mb-3">PRICES</h2>
          <p className="text-sm text-gray-600 mb-1">
            Range: ${priceRange[0]} - ${priceRange[1]}
          </p>
          <input
            type="range"
            min="10"
            max="200"
            value={priceRange[1]}
            onChange={(e) => applyFilters("price", [10, Number(e.target.value)])}
            className="w-full"
          />
        </div>

        {/* Color Filter */}
        <div className="bg-gray-50 p-4 rounded mb-6 space-y-5">
          <h2 className="font-semibold mb-3">COLOR</h2>
          <div className="flex gap-2 ">
            {colors.map((col, idx) => (
              <span
                key={idx}
                onClick={() => applyFilters("color", col)}
                className={`w-5 h-5 rounded-full border cursor-pointer ${
                  activeColor === col ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: col }}
              ></span>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="bg-gray-50 p-4 rounded mb-6 space-y-10">
          <h2 className="font-semibold mb-3">BRAND</h2>
          <ul className="space-y-1 text-gray-600">
            {brands.map((brand, idx) => (
              <li
                key={idx}
                onClick={() => applyFilters("brand", brand)}
                className={`flex justify-between cursor-pointer px-2 py-1 rounded ${
                  activeBrand === brand ? "text-blue-600 font-semibold" : ""
                }`}
              >
                <span>{brand}</span>
                <span className="text-gray-500">99</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reset Button */}
      <button
        className="mt-6 w-full py-2 border rounded bg-gray-100 hover:bg-gray-200"
        onClick={() => {
          setActiveCategory(null);
          setActiveBrand(null);
          setActiveColor(null);
          setPriceRange([10, 200]);
          onFilter({ category: null, price: [10, 200], color: null, brand: null });
        }}
      >
        MORE
      </button>
    </aside>
  );
};

export default Sidebar;
