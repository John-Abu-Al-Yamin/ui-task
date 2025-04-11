import React from "react";
import HeaderSection from "../HeaderSection";

const AskSection = () => {
  
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <HeaderSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our platform and services"
      />
      <div className="max-w-3xl mx-auto mt-10">
        <div className="space-y-6">
          <details
            className="group [&_summary::-webkit-details-marker]:hidden rounded-lg shadow-sm overflow-hidden"
            data-aos="fade-up"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-white p-5 text-gray-900 hover:bg-gray-50 transition-colors">
              <h2 className="text-lg font-medium">
                What is this platform, and how does it work?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="bg-white px-5 py-4 border-t border-gray-100">
              <p className="text-gray-700">
                Our platform allows you to create a professional business
                website in minutes—no coding skills required! Simply choose a
                package, customize your design, and publish your site instantly.
              </p>
            </div>
          </details>

          <details
            className="group [&_summary::-webkit-details-marker]:hidden rounded-lg shadow-sm overflow-hidden"
            data-aos="fade-up"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-white p-5 text-gray-900 hover:bg-gray-50 transition-colors">
              <h2 className="text-lg font-medium">
                Do I need any technical skills to build my website?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="bg-white px-5 py-4 border-t border-gray-100">
              <p className="text-gray-700">
                Not at all! Our intuitive drag-and-drop interface makes website
                creation accessible to everyone, regardless of technical
                background. Our templates are pre-designed by professionals to
                ensure your site looks great from the start.
              </p>
            </div>
          </details>

          <details
            className="group [&_summary::-webkit-details-marker]:hidden rounded-lg shadow-sm overflow-hidden"
            data-aos="fade-up"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-white p-5 text-gray-900 hover:bg-gray-50 transition-colors">
              <h2 className="text-lg font-medium">
                How much does it cost to create and maintain a website?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="bg-white px-5 py-4 border-t border-gray-100">
              <p className="text-gray-700">
                We offer flexible pricing plans to suit businesses of all sizes.
                Our basic package starts at $9.99/month and includes hosting,
                domain connection, and essential features. Premium plans offer
                advanced functionality, priority support, and more customization
                options.
              </p>
            </div>
          </details>

          <details
            className="group [&_summary::-webkit-details-marker]:hidden rounded-lg shadow-sm overflow-hidden"
            data-aos="fade-up"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-white p-5 text-gray-900 hover:bg-gray-50 transition-colors">
              <h2 className="text-lg font-medium">
                Can I connect my own domain name to my website?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="bg-white px-5 py-4 border-t border-gray-100">
              <p className="text-gray-700">
                Yes! You can connect your existing domain or purchase a new one
                through our platform. Our step-by-step guide makes the domain
                connection process simple, usually taking just a few minutes to
                complete.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default AskSection;
