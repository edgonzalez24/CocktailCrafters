/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardProductComponent = ({product}) => {
  return (
    <Link
      to={`/drink/${product.idDrink}`}
      className="group relative"
      preventScrollReset={true}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.strDrinkThumb}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.strDrink}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.strGlass}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {product.strCategory}
        </p>
      </div>
    </Link>
  );
}

export default CardProductComponent;
