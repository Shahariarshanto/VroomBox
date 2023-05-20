import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-screen-xl px-6 py-10 mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#ff385c] mb-8">
        <RiLockPasswordFill className="inline-block mr-3 text-5xl" />
        Privacy Policy
      </h1>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-700 mb-4">
          At Toy Car Website, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and disclose your
          personal information when you use our website.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect certain personal information from you, including your
          name, email address, and shipping address when you place an order or
          contact us through our website.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use the collected information to process your orders, provide
          customer support, improve our services, and communicate with you about
          promotions or updates related to Toy Car Website.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Information Security</h2>
        <p className="text-gray-700 mb-4">
          We take appropriate security measures to protect your personal
          information and ensure it is not accessed, disclosed, altered, or
          destroyed.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          We may use third-party services that have their own privacy policies
          and practices. We recommend reviewing the privacy policies of these
          third-party services before using them.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about our Privacy Policy or the
          handling of your personal information, please contact us at:
          <br />
          Email: info@toycarwebsite.com
          <br />
          Phone: 123-456-7890
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
