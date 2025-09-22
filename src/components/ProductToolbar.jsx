import { Grid3x3, List } from "lucide-react";

const ProductToolbar = () => {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-100">
      {/* Left - Info */}
      <p className="text-gray-600 text-sm">13 Items</p>

      {/* Middle - Filters */}
      <div className="flex items-center gap-6">
        {/* Sort By */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span className="font-medium">Sort By</span>
          <select className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500">
            <option>Name</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>

        {/* Show */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span className="font-medium">Show</span>
          <select className="border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
      </div>

      {/* Right - View Toggle */}
      <div className="flex items-center gap-3">
        <button className="p-2 border rounded-md hover:bg-blue-50">
          <Grid3x3 className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 border rounded-md hover:bg-blue-50">
          <List className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductToolbar;
