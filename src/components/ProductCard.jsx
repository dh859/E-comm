const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition  mb-8">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.isHot && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            HOT
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
          {product.name}
        </h3>

        {/* Rating stars */}
        <div className="flex items-center my-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
            </svg>
          ))}
        </div>

        {/* Prices */}
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-bold">${product.price}</span>
          <span className="text-gray-500 line-through text-sm">
            ${product.oldPrice}
          </span>
          {product.discount && (
            <span className="text-red-500 text-sm">{product.discount}% OFF</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
