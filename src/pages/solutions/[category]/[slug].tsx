import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { solutionsData } from "@/data/solutions";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Coffee,
  Lock,
  Settings,
  Shield,
  Target,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import ServicesCard from "@/components/shared/services-card";
import SoftwareFAQ from "@/components/software-faq";

export default function SolutionPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const category = solutionsData[params.category as keyof typeof solutionsData];

  if (!category) {
    notFound();
  }

  const solution = category.solutions.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="">
      <NewHero
        ImgSrc="/svg/engagement.svg"
        title={solution.title}
        showHighlighted={false}
        description={solution.description}
        buttonText="Get Started"
      />

      <div className="container mx-auto max-w-7xl px-10">
        <div>
          <h2 className="mb-4 font-sora text-2xl font-semibold">Overview</h2>
          <p className="mb-6 text-gray-600">{solution.content}</p>
        </div>

        <section className="mb-4">
          <h3 className="mb-4 text-xl font-semibold">Key Features</h3>
          <div className="grid grid-cols-responsive300 gap-4">
            {solution.features.map((feature, index) => (
              <Card
                key={index}
                className="border-none bg-orange-650 text-black"
              >
                <CardContent className="p-6">
                  {index === 0 && <Settings className="mb-4 h-8 w-8" />}
                  {index === 1 && <Target className="mb-4 h-8 w-8" />}
                  {index === 2 && <Shield className="mb-4 h-8 w-8" />}
                  {index === 3 && <Coffee className="mb-4 h-8 w-8" />}
                  {index === 4 && <Clock className="mb-4 h-8 w-8" />}
                  {index === 5 && <Lock className="mb-4 h-8 w-8" />}
                  <h3 className="mb-3 text-xl font-semibold">{feature}</h3>
                  <p className="text-black/80">
                    {solution.benefits[index] ||
                      "Enhance your security and compliance posture with our comprehensive solution."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Key Benefits</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white">
              <ul className="space-y-4">
                {solution.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <Image
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop&q=60"
                alt="Security Illustration"
                className="h-full w-full rounded-lg object-cover"
                width={800}
                height={800}
              />
            </div>
          </div>
          {/* <ul className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {solution.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul> */}
        </section>
      </div>
      {solution.capabilities && (
        <OurCapabilities detailsData={solution.capabilities} />
      )}

      <SoftwareFAQ />

      <ServicesCard
        altText={""}
        tagText="GET IN TOUCH"
        title={"Strengthen Your Security Posture"}
        description={
          "Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment."
        }
        imgSrc={""}
        index={0}
        href={"/contact"}
        buttonText="Schedule a call"
        showButton
      />

      <div className="my-4 text-center">
        <Link
          href={`/solutions/${params.category}`}
          className="font-semibold text-orange-500 hover:text-orange-600"
        >
          Back to {category.category}
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }

  const { category, slug } = params as { category: string; slug: string };

  const categoryData = solutionsData[category as keyof typeof solutionsData];
  if (!categoryData) {
    return { notFound: true };
  }

  const solution = categoryData.solutions.find((s) => s.slug === slug);
  if (!solution) {
    return { notFound: true };
  }

  return {
    props: {
      params,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(solutionsData).flatMap((category) =>
    solutionsData[category as keyof typeof solutionsData].solutions.map(
      (solution) => ({
        params: { category, slug: solution.slug },
      }),
    ),
  );

  return {
    paths,
    fallback: false,
  };
};
