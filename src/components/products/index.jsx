import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../constants";

const Products = () => {
  // Function to get random products
  const getRandomProducts = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Get the first `count` items
  };

  // Function to generate random discount between 10% and 70%
  const getRandomDiscount = () => {
    const discounts = [19, 43, 27, 25, 30, 40, 59, 65, 31];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  // Get random products and add random discounts
  const randomProducts = getRandomProducts(products, 12).map((product) => {
    const discount = getRandomDiscount();
    const originalPrice = Number(product.price);
    // The displayed price is the discounted price, and the strikethrough price is the original
    const discountedPrice = Math.round(originalPrice * (1 - discount / 100));

    return {
      ...product,
      discount,
      discountedPrice,
      originalPrice,
    };
  });

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Selected
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Explore our handpicked collections, showcasing the best designs
            crafted to match every style and occasion. Your perfect look awaits.
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {randomProducts.map((product) => (
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
        <div className="w-full mt-10 flex items-center justify-center">
          <Link
            to={"/sale"}
            className="text-gray-700 border hover:bg-indigo-500 hover:border-none
            hover:text-white px-10 py-3 rounded-lg"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
