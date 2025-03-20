import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with decorative elements */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
              Privacy Policy
            </h1>
            <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600 text-lg">
            Your privacy matters to us at Dream Dresses
          </p>
        </div>

        {/* Last updated info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-l-4 border-indigo-500">
          <p className="text-gray-500 text-sm">Last Updated: March 20, 2025</p>
          <p className="mt-3 text-gray-700">
            At Dream Dresses, we respect your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website.
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p className="mb-4">
                We may collect several types of information from and about users
                of our website, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Personal information such as name, postal address, email
                  address, telephone number, and payment information when you
                  make a purchase
                </li>
                <li>
                  Account information when you create an account on our website
                </li>
                <li>Information about your preferences and shopping habits</li>
                <li>
                  Technical data including IP address, browser type, time zone,
                  and operating system
                </li>
                <li>Usage data about how you interact with our website</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p className="mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>
                  Providing you with information about products that may
                  interest you
                </li>
                <li>Improving our website and customer service</li>
                <li>
                  Administering promotions, surveys, or other website features
                </li>
                <li>
                  Communicating with you about updates, promotions, and events
                </li>
                <li>
                  Protecting against fraudulent transactions and other illegal
                  activities
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p>
                We use cookies and similar tracking technologies to track
                activity on our website and store certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Protect Your Information
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p>
                We implement appropriate security measures to maintain the
                safety of your personal information. However, please remember
                that no method of transmission over the Internet or electronic
                storage is 100% secure. While we strive to use commercially
                acceptable means to protect your personal information, we cannot
                guarantee its absolute security.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Disclosure
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p>
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties without your
                consent. This does not include trusted third parties who assist
                us in operating our website, conducting our business, or
                servicing you, so long as those parties agree to keep this
                information confidential.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Rights
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p className="mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  The right to access the personal information we hold about you
                </li>
                <li>
                  The right to request correction of inaccurate personal
                  information
                </li>
                <li>
                  The right to request deletion of your personal information
                </li>
                <li>
                  The right to object to processing of your personal information
                </li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to This Privacy Policy
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </section>
        </div>

        {/* Contact section */}
        <div className="mt-12 bg-indigo-50 rounded-lg p-8 border border-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium">Email:</span>{" "}
              privacy@dreamdresses.com
            </p>
            <p>
              <span className="font-medium">Phone:</span> (123) 456-7890
            </p>
            <p>
              <span className="font-medium">Address:</span> 123 Fashion Avenue,
              Style City, SC 12345
            </p>
          </div>
        </div>

        {/* Footer element */}
        <div className="mt-16 text-center">
          <div className="h-px bg-gray-200 max-w-md mx-auto mb-8"></div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dream Dresses. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
