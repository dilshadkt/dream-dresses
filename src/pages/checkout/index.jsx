import React from "react";

const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
            ></path>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Checkout Coming Soon
        </h1>
        <p className="text-gray-600 mb-6">
          We're currently working on enhancing your checkout experience. Please
          check back soon!
        </p>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-blue-600 h-2 rounded-full w-3/4 animate-pulse"></div>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
          onClick={() => window.history.back()}
        >
          Return to Shopping
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Need assistance? Contact our support team at support@example.com
      </p>
    </div>
  );
};

export default Checkout;
