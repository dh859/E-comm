import { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import ProductToolbar from "../components/ProductToolbar";

const HomePage = () => {
  const [filters, setFilters] = useState({
    category: null,
    price: [10, 200],
    color: null,
    brand: null,
  });

  return (
    <div className="flex">
      <Sidebar onFilter={setFilters} />
      <main className="flex-1 p-6">
        <HeroBanner  />
        <ProductToolbar className="mb-6"/>
        <ProductGrid filters={filters} />
        <Pagination />
      </main>
    </div>
  );
};

export default HomePage;
