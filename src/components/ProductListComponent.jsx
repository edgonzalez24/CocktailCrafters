import { useEffect, useState } from "react";
import CardProductComponent from "./CardProductComponent";


// eslint-disable-next-line react/prop-types
export default function ProductListComponent({products}) {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    setListProducts(products)
  }, [products]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Popular Drinks
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listProducts.map((product) => (
            <CardProductComponent key={product.idDrink} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
