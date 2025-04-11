import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2E2E2E] text-white p-5 rounded-t-[35px] lg:p-8 lg:rounded-t-[70px]">
      <div className="max-w-6xl mx-auto">
        <div className=" flex flex-col gap-4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Left Section */}
          <div className="space-y-4" data-aos="fade-left">
            <div className="flex items-center gap-2">
              <img src="/image/logo.png" alt="" className="w-8 md:w-10 object-cover" loading="lazy"/>
              <h1 className="text-3xl font-bold">Codak</h1>
            </div>
            <p className="text-gray-300 max-w-md">
              Build your professional website in minutes! No coding required.
              Start now and grow your business online.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="bg-[#3B3B3B] p-3 rounded-full hover:bg-[#4B4B4B] transition"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-[#3B3B3B] p-3 rounded-full hover:bg-[#4B4B4B] transition"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-[#3B3B3B] p-3 rounded-full hover:bg-[#4B4B4B] transition"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-4" data-aos="fade-right">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <address className="text-gray-300 not-italic">
              <p>5830 E 2nd St, Ste 7000</p>
              <p>#18238, Casper, Wyoming</p>
              <p>82609 US</p>
            </address>
            <p className="text-gray-300">
              Email:{" "}
              <a href="mailto:info@Codak.net" className="hover:text-white">
                info@Codak.net
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#3B3B3B] mt-8 pt-6 text-center text-gray-400">
          <p>© 2024 Codak. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
