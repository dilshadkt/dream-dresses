import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseCart } from "../../hooks/UseCart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items } = UseCart();

  return (
    <>
      <header className=" border-b sticky top-0 bg-white z-50">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          {/* <!-- logo - start --> */}
          <Link
            to="/"
            className="inline-flex  max-h-[70px] overflow-hidden flexCenter items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            {/* <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Flowrift */}
            <img src="/images/logo.png" alt="" className=" w-32 md:w-52 " />
          </Link>
          {/* <!-- logo - end --> */}

          {/* <!-- nav - start --> */}
          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            <Link to={"/"} className="text-lg font-semibold text-indigo-500">
              Home
            </Link>
            <Link
              to="/collection"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Collections
            </Link>
            <Link
              to="sale"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Sale
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </Link>
          </nav>
          {/* <!-- nav - end --> */}

          {/* <!-- buttons - start --> */}
          <div className="flex divide-x border-r sm:border-l">
            <a
              href="#"
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Account
              </span>
            </a>

            <Link
              to="/cart"
              className="flex h-12 w-12 flex-col items-center justify-center 
              gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 
             relative sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
              {items?.length > 0 && (
                <div
                  className="absolute top-0 md:top-2 right-1 md:right-5  w-5 md:w-6  h-5 md:h-6 rounded-full bg-indigo-500
               text-white  
               text-sm md:text-base flex items-center justify-center"
                >
                  {items?.length}
                </div>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              type="button"
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Menu
              </span>
            </button>
          </div>
          {/* <!-- buttons - end --> */}
        </div>
      </header>
      <div
        className={`fixed top-0 bottom-0 right-0 w-2/3 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-indigo-500 transition"
          >
            Home
          </Link>
          <Link
            to="/collection"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-indigo-500 transition"
          >
            Collections
          </Link>
          <Link
            to="/sale"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-indigo-500 transition"
          >
            Sale
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-indigo-500 transition"
          >
            About
          </Link>
        </nav>

        <div className="p-4 border-t">
          <div className="flex space-x-4">
            <Link
              to="/account"
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-xs text-gray-600 mt-1">Account</span>
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex relative flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {items?.length > 0 && (
                <div
                  className="absolute -top-3 md:top-2 -right-3 md:right-5  w-5 md:w-6  h-5 md:h-6 rounded-full bg-indigo-500
               text-white  
               text-sm md:text-base flex items-center justify-center"
                >
                  {items?.length}
                </div>
              )}
              <span className="text-xs text-gray-600 mt-1">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
