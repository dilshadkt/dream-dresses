import React from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          Collections
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* <!-- product - start --> */}
          <div>
            <Link
              to="/sale?category=men"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Men</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Business Causual
                </span>
              </div>
            </Link>
          </div>
          {/* <!-- product - end --> */}

          {/* <!-- product - start --> */}
          <div>
            <Link
              to="/sale?category=women"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by engin akyurt"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Women</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Summer Season
                </span>
              </div>
            </Link>
          </div>
          {/* <!-- product - end --> */}

          {/* <!-- product - start --> */}
          <div>
            <Link
              to="/sale?category=kids"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="/images/kids.jpg"
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Kids</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Casual
                </span>
              </div>
            </Link>
          </div>
          {/* <!-- product - end --> */}

          {/* <!-- product - start --> */}
          <div>
            <Link
              to="/sale?category=teens"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="/images/teen.jpg"
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Teen</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Sale
                </span>
              </div>
            </Link>
          </div>
          {/* <!-- product - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Collections;
