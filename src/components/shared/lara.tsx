import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import ArrowIcon from "@/components/icons/arrow";

import black_mark from "../../../public/svg/black_mark.svg";

interface Lara {
  title: string;
  quote: string;
  image: string;
}

const lara: Lara[] = [
  {
    image: black_mark,
    title: "AWS Organization and access management",
    quote:
      "Centrally govern your all environments, manage access rights, permissions and policies.",
  },
  {
    image: black_mark,
    title: "VPC and related services",
    quote:
      "Network foundation, app and edge networking, hybrid connectivity and security.",
  },
  {
    image: black_mark,
    title: "AWS Organization and access management",
    quote:
      "Centrally govern your all environments, manage access rights, permissions and policies.",
  },
  {
    image: black_mark,
    title: "VPC and related services",
    quote:
      "Network foundation, app and edge networking, hybrid connectivity and security.",
  },
  {
    image: black_mark,
    title: "Kubernetes",
    quote:
      "Operate kubernetes on your own infrastructure, experience ultimate scaling and cost savings.",
  },
  {
    image: black_mark,
    title: "Observability",
    quote:
      "Grafana, Loki, Thanos, Tempo, Opensearch, Elastic. You name it, we have it.",
  },
];

export default function LARA() {
  return (
    <section className="mx-auto mb-4 max-w-7xl bg-white xl:mx-8 lg:px-8">
      <section className="rounded-xl bg-main-gradient py-16">
        <div className="mx-auto px-4 lg:px-8 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              LARA building blocks{" "}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              All of the componentes mentioned below are defined using
              Infrastructure as Code, allowing for further customization and
              reusability in different environments.{" "}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-2 sm:grid-cols-1">
            {lara.map((item, index) => (
              <article
                key={index}
                className="space-y-4 rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <Image src={black_mark} alt="black_mark" />
                <h3 className="text-2xl font-bold text-[#262626]">
                  {item.title}
                </h3>
                <p className="text-[#262626]">{item.quote}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Button className="flex w-fit transform items-center gap-4 rounded-2xl border border-[#081348] bg-orange-650 text-white transition duration-500 hover:scale-105 hover:bg-orange-600">
            <span>SEE MORE</span>
            <ArrowIcon />
          </Button>
        </div>
      </section>
    </section>
  );
}
