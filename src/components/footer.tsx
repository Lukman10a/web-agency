import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'; // For social icons
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue-900 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
          {/* Logo and Newsletter Section */}
          <div className='py-5'>
            <Image src='/assets/logo.png' width={150} height={150} alt='brand logo'/>
            <p className="mt-4 text-sm text-neutral-400">
              Subscribe to our newsletter and get a 20% <br /> discount coupon for your next order.
            </p>
            <Link
              href="mailto:hi@teversemultiuniverse"
              className="block mt-2 text-lg font-semibold text-white"
            >
              hi@teversemultiuniverse
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-10">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-orange-650 rounded-full p-2"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-orange-650 rounded-full p-2"
              >
                <FaYoutube size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-orange-650 rounded-full p-2"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          <div className='flex justify-evenly'>
          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-semibold">Contact us</h4>
            <p className="mt-2 text-sm text-neutral-400 ">contact@teversemulti</p>
            <p className="text-sm text-neutral-400 py-3">+421 221 020 694</p>
          </div>

          {/* Our Services Section */}
          <div>
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li>Migration</li>
              <li>Optimization</li>
              <li>Kickstart</li>
            </ul>
          </div>

          {/* Other Section */}
          <div>
            <h4 className="text-lg font-semibold">Other</h4>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li>Privacy Policies</li>
              <li>Change Consents</li>
            </ul>
          </div>
        </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-sm text-gray-400">
          Copyright © 2021 All rights reserved. @teversemultiuniverse
        </div>
      </div>
    </footer>
  );
};

export default Footer;
