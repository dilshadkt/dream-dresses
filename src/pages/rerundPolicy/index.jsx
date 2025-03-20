import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Refund Policy</h1>
        </div>

        <div className="p-6">
          <div className="prose max-w-none">
            <p className="mb-4">
              Thank you for shopping with us. We want to ensure your
              satisfaction with every purchase. Please read our refund policy
              below.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Return Eligibility
            </h2>
            <p className="mb-4">
              Items may be eligible for return and refund if they meet the
              following conditions:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                The item is returned within 30 days of the original purchase
                date
              </li>
              <li className="mb-2">
                The item is unused and in its original packaging
              </li>
              <li className="mb-2">
                The item is not damaged or showing signs of wear
              </li>
              <li className="mb-2">
                You have the original receipt or proof of purchase
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Non-Returnable Items
            </h2>
            <p className="mb-4">
              The following items cannot be returned or refunded:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Gift cards</li>
              <li className="mb-2">Downloadable software products</li>
              <li className="mb-2">Personalized or custom-made items</li>
              <li className="mb-2">
                Perishable goods (such as food, flowers, or plants)
              </li>
              <li className="mb-2">
                Items on clearance or marked as final sale
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Refund Process
            </h2>
            <p className="mb-4">
              Once we receive your returned item, we will inspect it and notify
              you of the status of your refund. If your return is approved:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Refunds will be processed to the original payment method
              </li>
              <li className="mb-2">
                Credit card refunds may take 5-10 business days to appear on
                your statement
              </li>
              <li className="mb-2">
                Store credit refunds will be issued immediately
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Shipping Costs
            </h2>
            <p className="mb-4">
              The customer is responsible for all return shipping costs unless
              the item was received damaged or defective. In cases where we made
              an error (wrong item shipped, defective product), we will cover
              the return shipping costs.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              How to Initiate a Return
            </h2>
            <p className="mb-4">To start the return process:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">
                Contact our customer service team at support@example.com
              </li>
              <li className="mb-2">
                Include your order number and reason for return
              </li>
              <li className="mb-2">
                You will receive a Return Merchandise Authorization (RMA) number
              </li>
              <li className="mb-2">
                Package the item securely with the RMA number clearly visible
              </li>
              <li className="mb-2">
                Ship the item to the address provided in the return instructions
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about our refund policy, please contact
              us:
            </p>
            <ul className="list-none pl-6 mb-4">
              <li className="mb-2">Email: support@example.com</li>
              <li className="mb-2">Phone: (555) 123-4567</li>
              <li className="mb-2">
                Hours: Monday-Friday, 9:00 AM - 5:00 PM EST
              </li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">
              This refund policy was last updated on March 20, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
