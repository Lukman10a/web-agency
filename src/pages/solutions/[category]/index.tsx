import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { solutionsData } from "@/data/solutions";
import { Coffee, Settings, Shield, Target } from "lucide-react";
import { ParsedUrlQuery } from "querystring";

import { Card, CardContent } from "@/components/ui/card";

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
}

const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full border border-gray-200 px-4 py-1 text-sm font-medium">
            BENEFITS
          </span>

          <h1 className="mb-6 text-4xl font-bold">{category.category}</h1>

          <p className="mb-4 text-lg text-gray-600">
            Managing an AWS environment can take valuable time away from
            engineers. Building an on-call rotation, dealing with incidents,
            repairing and maintaining your infrastructure—these burdens create
            friction, distracting teams from mission-critical initiatives and
            slowing down development.
          </p>

          <p className="mb-12 text-gray-600">
            With {category.category}, we handle everything you need to keep your
            environment reliably running, so that you stay cost efficient,
            scalable, agile, and secure.
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
                    href={`/solutions/${category.category.toLowerCase()}/${solution.slug}`}
                    className="mt-4 inline-block font-semibold text-black hover:opacity-80"
                  >
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
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
    },
  };
};

export default CategoryPage;
