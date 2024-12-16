import React from "react";

import Image from "next/image";
// For social icons
import Link from "next/link";

import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
          <div className="py-5">
            <Image
              src="/assets/logo-main-sm.png"
              width={150}
              height={150}
              alt="brand logo"
            />
            <p className="mt-4 text-sm text-neutral-400">
              {/* Subscribe to our newsletter and get a 20% <br /> discount coupon
              for your next order. */}
              Get the latest news on Amazon Web Services, the cloud,
              <br /> emerging tech, and more with our weekly newsletter.
              <br /> Every Thursday, direct to your inbox.
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
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-650 p-2 text-black"
              >
                <FaXTwitter size={24} />
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

            {/* Company Section */}
            <div>
              <h4 className="font-sora text-lg font-semibold">Company </h4>
              <ul className="mt-2 space-y-2 text-neutral-400">
                <li>
                  <Link href="/company/about-us">About Us </Link>
                </li>
                <li>
                  <Link href="/company/culture">Our Culture</Link>
                </li>
                <li>
                  <Link href="/company/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Solution Section */}
            <div>
              <h4 className="font-sora text-lg font-semibold">Solutions </h4>
              <ul className="mt-2 space-y-2 text-neutral-400">
                <li>
                  <Link href={"/services/professional-services/aws-migration"}>
                    Cloud Management
                  </Link>
                </li>
                <li>
                  <Link href={"/services/professional-services/aws-migration"}>
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link href={""}>AWS Map</Link>
                </li>
                <li>
                  <Link href={""}>Gen AI</Link>
                </li>
                <li>
                  <Link href={"/services/idam#idam-migration"}>
                    IDAM Migration
                  </Link>
                </li>
                <li>
                  <Link href={"/solutions/idam/iga"}>IGA</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-sm text-gray-400">
          {/* Copyright © 2021 All rights reserved. @teversemultiuniverse */}
          Copyright ©️ 2024 Teverse Pty Ltd. All Rights Reserved. All trademarks
          are property of their legal owners.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
