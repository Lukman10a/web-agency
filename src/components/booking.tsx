import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import image from "../../public/assets/cardimage1.png";
import ArrowIcon from "./icons/arrow";
import { Separator } from "@/components/ui/separator";

const stats = [
  { count: "100+", label: "Clusters" },
  { count: "1000+", label: "Nodes" },
  { count: "50+", label: "AWS Projects" },
];

const Booking: React.FC = () => (
  <section className="mx-4">
    {/* Let's Talk Card */}
    <div className="container mx-auto my-10 max-w-7xl rounded-lg border p-6">
      <div className="mx-auto flex items-center gap-6 rounded-2xl bg-[#fcfcfc] p-6 md:flex-col">
        <Image
          src={image}
          alt="Card image"
          width={500}
          height={500}
          className="w-1/2 sm:w-full"
        />
        <div className="w-1/2 sm:w-full">
          <h3 className="mb-4 font-sora text-5xl font-bold md:text-3xl">
            Let’s talk!
          </h3>
          <p className="mb-6">
            Quick intro to our services and roadmap for your cloud journey in 30
            minutes.
          </p>
          <Button
            className="rounded-full border border-black bg-orange-650"
            asChild
          >
            <Link
              href="#"
              className="flex items-center rounded-full bg-orange-600 px-4 py-3 text-white"
            >
              BOOK A FREE CALL <ArrowIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="container mx-auto mb-16 flex max-w-7xl justify-between gap-7 border-b border-t p-6 md:flex-wrap md:items-center">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-3 text-center">
          <p className="font-sora text-3xl font-bold">{stat.count}</p>
          <Separator orientation="vertical" />
          <p className="text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Booking;
