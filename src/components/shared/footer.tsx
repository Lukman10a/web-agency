import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
        <div className="grid grid-cols-2 justify-between gap-8 sm:grid-cols-1">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {/* Contact Us Section */}
            {/* <div> */}
            {/* <h4 className="font-sora text-lg font-semibold">Contact us</h4> */}
            {/* <p className="mt-2 text-sm text-neutral-400">
                contact@teversemulti
              </p> */}
            {/* <p className="py-3 text-sm text-neutral-400">+421 221 020 694</p> */}
            {/* </div> */}

            {/* Company Section */}
            <div>
              <h4 className="font-sora text-lg font-semibold">Company </h4>
              <ul className="mt-2 space-y-2 text-neutral-400">
                <li>
                  {/* <Link href="/company/about-us">About Us </Link> */}
                  <Link href="/soon">About Us </Link>
                </li>
                <li>
                  {/* <Link href="/company/culture">Our Culture</Link> */}
                  <Link href="/soon">Our Culture</Link>
                </li>
                <li>
                  {/* <Link href="/company/careers">Careers</Link> */}
                  <Link href="/soon">Careers</Link>
                </li>
                <li>
                  {/* <Link href="/contact">Contact</Link> */}
                  <Link href="/soon">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Solution Section */}
            <div>
              <h4 className="font-sora text-lg font-semibold">Solutions </h4>
              <ul className="mt-2 space-y-2 text-neutral-400">
                <li>
                  {/* <Link href={"/services/professional-services/aws-migration"}> */}
                  <Link href={"/soon"}>Cloud Management</Link>
                </li>
                <li>
                  {/* <Link href={"/services/professional-services/aws-migration"}> */}
                  <Link href={"/soon"}>Cloud Migration</Link>
                </li>
                <li>
                  <Link href={"/soon"}>AWS MAP</Link>
                </li>
                <li>
                  <Link href={"/soon"}>Gen AI</Link>
                </li>
                <li>
                  {/* <Link href={"/services/idam#idam-migration"}> */}
                  <Link href={"/soon"}>IDAM Migration</Link>
                </li>
                <li>
                  {/* <Link href={"/solutions/idam/iga"}> */}
                  <Link href={"/soon"}>
                    Identity Governance and Administration (IGA)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end lg:items-start">
            <Image
              src="/assets/logo-main-sm.png"
              width={150}
              height={150}
              alt="brand logo"
            />
            <p className="mt-4 text-sm text-neutral-400">
              Get the latest news on AI, cloud, emerging tech, <br />
              and more with our weekly newsletter. Every <br />
              Thursday, direct to your inbox.
            </p>
            <Link
              href="mailto:hi@teversemultiuniverse"
              className="mt-2 block text-lg font-semibold text-white"
            >
              info@teverse.com.au
            </Link>

            {/* Social Media Icons */}
            <div className="mt-10 flex space-x-4">
              <Link
                href="https://www.instagram.com/teversegram"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-650 p-2 text-black"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="http://www.youtube.com/@TEVERSE-tube"
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
                href="https://x.com/HelloTeverse "
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-650 p-2 text-black"
              >
                <FaXTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-sm text-gray-400">
          Copyright ©️ 2024 Teverse Pty Ltd. All Rights Reserved. All trademarks
          are property of their legal owners.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
