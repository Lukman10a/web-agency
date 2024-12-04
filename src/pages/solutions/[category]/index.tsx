import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { solutionsData } from "@/data/solutions";
import { Coffee, Settings, Shield, Target } from "lucide-react";
import { ParsedUrlQuery } from "querystring";

import { HighlightedText } from "@/components/ui/animated/highlight-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import ArrowIcon from "@/components/icons/arrow";
import ContactSection from "@/components/lets-talk";

// Type for page params
interface Params extends ParsedUrlQuery {
  category: string;
}

// Type for page props
interface CategoryPageProps {
  category: {
    category: string;
    solutions: Array<{
      slug: string;
      title: string;
      description: string;
    }>;
  };
  params: { category: string };
}

const CategoryPage: NextPage<CategoryPageProps> = ({ category, params }) => {
  return (
    <div>
      <header className="flex items-center gap-10 bg-main-gradient p-12 md:flex-col">
        <div className="flex-[3] space-y-10 md:flex-1">
          <h1 className="animate-fade-in-up font-sora text-6xl font-extrabold">
            {category.category}
          </h1>
          <p className="animate-fade-in-up text-xl delay-200">
            We make sure you receive a tailor-made & cost-efficient cloud
            environment that is secure, scalable, easy to operate, and
            built-to-last
          </p>

          <Button
            asChild
            className="flex w-fit transform items-center gap-4 rounded-2xl border border-[#081348] bg-orange-650 text-white transition duration-500 hover:scale-105 hover:bg-orange-600"
          >
            <Link href="#">
              <span>EXPLORE</span>
              <ArrowIcon />
            </Link>
          </Button>
        </div>
        <div className="flex-[2] overflow-hidden rounded-xl">
          <Image
            src={"/svg/hero-illustration.svg"}
            // src={"/assets/teverse-hero-optimize.gif"}
            alt="hero-illustration"
            unoptimized
            height={500}
            width={500}
            className="h-full object-contain lg:h-auto lg:w-full"
          />
        </div>
      </header>
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <span className="mb-6 inline-block rounded-full border border-gray-200 px-4 py-1 text-sm font-medium">
            BENEFITS
          </span>

          <p className="mb-4 text-lg text-gray-600">
            Managing an AWS environment can take valuable time away from
            engineers. Building an on-call rotation, dealing with incidents,
            repairing and maintaining your infrastructure—these burdens create
            friction, distracting teams from mission-critical initiatives and
            slowing down development.
          </p>

          <p className="mb-12 text-gray-600">
            With{" "}
            <HighlightedText
              color="#f58d61"
              highlightHeight="50%"
              highlightClassName="z-[-1] rounded-lg"
            >
              {category.category}
            </HighlightedText>{" "}
            , we handle everything you need to keep your environment reliably
            running, so that you stay cost efficient, scalable, agile, and
            secure.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            {category.solutions.map((solution, index) => (
              <Card
                key={solution.slug}
                className="border-none bg-[#FF9F76] text-black"
              >
                <CardContent className="p-6">
                  {index === 0 && <Settings className="mb-4 h-8 w-8" />}
                  {index === 1 && <Target className="mb-4 h-8 w-8" />}
                  {index === 2 && <Shield className="mb-4 h-8 w-8" />}
                  {index === 3 && <Coffee className="mb-4 h-8 w-8" />}
                  <h3 className="mb-3 text-xl font-semibold">
                    {solution.title}
                  </h3>
                  <p className="text-black/80">{solution.description}</p>
                  <Link
                    href={`/solutions/${params.category}/${solution.slug}`}
                    className="mt-4 inline-block font-semibold text-black hover:opacity-80"
                  >
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

// Static Paths for generating routes at build time
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // Generate paths from available categories
  const paths = Object.keys(solutionsData).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false, // Return 404 for non-existing categories
  };
};

// Static Props to fetch data for each category
export const getStaticProps: GetStaticProps<
  CategoryPageProps,
  Params
> = async ({ params }) => {
  // Ensure params exist and category is valid
  if (!params || !params.category) {
    return {
      notFound: true,
    };
  }

  const category = solutionsData[params.category as keyof typeof solutionsData];

  // If category doesn't exist, return 404
  if (!category) {
    return {
      notFound: true,
    };
  }

  // Exclude the `capabilities` from each solution
  const sanitizedCategory = {
    ...category,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    solutions: category.solutions.map(({ capabilities, ...rest }) => rest),
  };

  console.log({ sanitizedCategory });

  return {
    props: {
      category: sanitizedCategory,
      params,
    },
  };
};

export default CategoryPage;
