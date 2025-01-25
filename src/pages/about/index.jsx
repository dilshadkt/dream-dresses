import React from "react";

const About = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="/images/about.jpg"
                loading="lazy"
                alt="Dream Dresses Collection"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-indigo-500 md:text-left">
              Who we are
            </p>

            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              Our competitive advantage at Dream Dresses
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              At Dream Dresses, we believe that every woman deserves to feel
              beautiful and confident in the perfect dress. Our carefully
              curated collection is designed with attention to detail, offering
              a variety of styles, colors, and sizes to suit every occasion.
              From elegant evening gowns to casual dresses, each piece embodies
              quality, comfort, and timeless fashion.
              <br />
              <br />
              Whether you're looking for a dress for a special event or
              something for everyday wear, Dream Dresses has something for every
              style. Our dresses are crafted to not only make you look stunning
              but also to provide the comfort and fit you need to feel your
              best.
            </p>

            <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              About Dream Dresses
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Dream Dresses is dedicated to offering the latest trends in
              fashion while keeping comfort and elegance at the forefront. We
              believe in creating dresses that make our customers feel like
              they're walking on air, with fabrics that flow effortlessly and
              designs that capture the essence of sophistication. Whether you're
              preparing for a gala, a wedding, or a casual outing, our dresses
              are designed to make a statement and help you shine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
