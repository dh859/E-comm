import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductGrid = ({ filters }) => {
  const { category, price, color, brand } = filters;

  const displayedProducts = products.filter((p) => {
    const matchCategory = category ? p.name.toLowerCase().includes(category.toLowerCase()) : true;
    const matchPrice = price ? p.price >= price[0] && p.price <= price[1] : true;
    const matchColor = color ? p.color === color : true;
    const matchBrand = brand ? p.brand.toLowerCase() === brand.toLowerCase() : true;

    return matchCategory && matchPrice && matchColor && matchBrand;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {displayedProducts.length > 0 ? (
        displayedProducts.map((item, idx) => <ProductCard key={idx} product={item} />)
      ) : (
        <p className="col-span-3 text-center text-gray-500">No products found</p>
      )}
    </div>
  );
};

export default ProductGrid;
