import React, { useEffect, useState } from "react";
import { products } from "../../constants";
import { Link, useSearchParams } from "react-router-dom";

const Sale = () => {
  const [searchParams] = useSearchParams();
  const [filteredProduct, setFilteredProduct] = useState(products);
  // Access query parameters
  const category = searchParams.get("category");

  useEffect(() => {
    if (category === "all" || category === null) {
      setFilteredProduct(products);
    } else {
      setFilteredProduct(() =>
        products.filter((item) => item.category === category)
      );
    }
  }, [category]);

  return (
    <div className="bg-white pb-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="h-[70px]  mt-3 md:mt-0">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex h-12 w-[90%] sm:w-78 divide-x overflow-hidden rounded-lg border">
              {["all", "men", "women", "teens", "kids"].map((item, index) => (
                <Link
                  key={index}
                  to={`/sale?category=${item}`}
                  className={` ${
                    item === "all"
                      ? (category === null || category === "all") &&
                        `bg-indigo-500 text-white`
                      : category === item && `bg-indigo-500 text-white`
                  } flex capitalize w-1/3 items-center justify-center
                   text-sm md:text-base text-gray-500 transition
                    duration-100 hover:bg-gray-100 hover:text-gray-800 `}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-x-4 overflow-y-auto gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProduct.map((product) => (
            <div key={product.id}>
              <Link
                to={`/collection/${product.id}`}
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src={product.image[0]}
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="absolute bottom-2 left-0 flex gap-2">
                  <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                    -50%
                  </span>
                  <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                    New
                  </span>
                </div>
              </Link>

              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <Link
                    to={`/collection/${product.id}`}
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    {product.title}
                  </Link>
                  <span className="text-gray-500">by {product.brand}</span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-bold text-gray-600 lg:text-lg">
                    {product.price}
                  </span>
                  <span className="text-sm text-red-500 line-through">
                    {Number(product.price) + Number((product.price * 50) / 100)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
