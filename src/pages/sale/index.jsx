import React, { useEffect, useState } from "react";
import { products } from "../../constants";
import { Link, useSearchParams } from "react-router-dom";

const Sale = () => {
  const [searchParams] = useSearchParams();
  const [filteredProduct, setFilteredProduct] = useState([]);
  // Access query parameters
  const category = searchParams.get("category");

  // Function to generate random discount between 10% and 70%
  const getRandomDiscount = () => {
    const discounts = [19, 43, 27, 25, 30, 40, 59, 65, 31];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  // Apply discounts to products
  const applyDiscounts = (productList) => {
    return productList.map((product) => {
      const discount = getRandomDiscount();
      const originalPrice = Number(product.price);
      const discountedPrice = Math.round(originalPrice * (1 - discount / 100));

      return {
        ...product,
        discount,
        discountedPrice,
        originalPrice,
      };
    });
  };

  useEffect(() => {
    let productsToShow;

    if (category === "all" || category === null) {
      productsToShow = products;
    } else {
      productsToShow = products.filter((item) => item.category === category);
    }

    // Apply random discounts to the filtered products
    setFilteredProduct(applyDiscounts(productsToShow));
  }, [category]);

  return (
    <div className="bg-white pb-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="h-[70px] mt-3 md:mt-0">
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
                  alt={`Product image of ${product.title}`}
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="absolute bottom-2 left-0 flex gap-2">
                  <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                    -{product.discount}%
                  </span>
                  {product.isNew && (
                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                      New
                    </span>
                  )}
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
                  {/* Discounted Price */}
                  <span className="font-bold whitespace-nowrap text-gray-600 lg:text-lg">
                    ₹ {product.originalPrice}
                  </span>

                  {/* Original Price */}
                  <span className="text-sm whitespace-nowrap text-red-500 line-through">
                    ₹ {product.originalPrice + product.discountedPrice}
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
