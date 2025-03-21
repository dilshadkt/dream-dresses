import React from "react";

const Banner = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
          {/* <!-- content - start --> */}
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              Summer Sale
              <br />
              Up to 70% off.
            </h2>

            <p className="mb-8 max-w-md text-gray-400">
              Don’t miss out on the hottest deals this season! Shop your
              favorite styles at unbeatable discounts and upgrade your wardrobe
              for less.
            </p>

            <div className="mt-auto">
              <a
                href="#"
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Save now
              </a>
            </div>
          </div>

          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <img
              src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500"
              loading="lazy"
              alt="Photo by Dom Hill"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
