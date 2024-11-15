import Image from "next/image";
import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"; // For social icons
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
          {/* Logo and Newsletter Section */}
          <div className="py-5">
            <Image
              src="/assets/logo.png"
              width={150}
              height={150}
              alt="brand logo"
            />
            <p className="mt-4 text-sm text-neutral-400">
              Subscribe to our newsletter and get a 20% <br /> discount coupon
              for your next order.
            </p>
            <Link
              href="mailto:hi@teversemultiuniverse"
              className="mt-2 block text-lg font-semibold text-white"
            >
              hi@teversemultiuniverse
            </Link>

            {/* Social Media Icons */}
            <div className="mt-10 flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-650 p-2 text-black"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-650 p-2 text-black"
              >
                <FaYoutube size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-650 p-2 text-black"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
            {/* Contact Us Section */}
            <div>
              <h4 className="font-sora text-lg font-semibold">Contact us</h4>
              <p className="mt-2 text-sm text-neutral-400">
                contact@teversemulti
              </p>
              <p className="py-3 text-sm text-neutral-400">+421 221 020 694</p>
            </div>

            {/* Our Services Section */}
            <div>
              <h4 className="font-sora text-lg font-semibold">Our Services</h4>
              <ul className="mt-2 space-y-2 text-neutral-400">
                <li>
                  <Link href="/solution/?section=migration#cloud-journey">
                    Migration
                  </Link>
                </li>
                <li>
                  <Link href="/solution/?section=optimization#cloud-journey">
                    Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/solution/?section=kickstart#cloud-journey">
                    Kickstart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Section */}
            <div>
              <h4 className="font-sora text-lg font-semibold">Other</h4>
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
