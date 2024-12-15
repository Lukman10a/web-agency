import { useState } from "react";

import Image from "next/image";

import { pressReleases } from "@/data/company";
import { NewspaperIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PressPage() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Extract unique months and years
  const months = Array.from(
    new Set(
      pressReleases.map((pr) =>
        pr.date.toLocaleString("default", { month: "long" }),
      ),
    ),
  );
  const years = Array.from(
    new Set(pressReleases.map((pr) => pr.date.getFullYear().toString())),
  );

  // Filter logic
  const filteredReleases = pressReleases.filter((release) => {
    const releaseMonth = release.date.toLocaleString("default", {
      month: "long",
    });
    const releaseYear = release.date.getFullYear().toString();

    const monthMatch = !selectedMonth || releaseMonth === selectedMonth;
    const yearMatch = !selectedYear || releaseYear === selectedYear;

    return monthMatch && yearMatch;
  });

  // Clear filters function
  const clearFilters = () => {
    setSelectedMonth(null);
    setSelectedYear(null);
  };

  return (
    <div className="container mx-auto">
      <header className="mb-8 bg-main-gradient p-12">
        <div className="flex max-w-7xl items-center justify-between space-x-4">
          <h1 className="text-3xl font-bold">Press & News</h1>
          <Image
            src={"/assets/checkers.png"}
            alt={""}
            width={500}
            height={500}
          />
        </div>
      </header>

      <section className="mx-auto mb-4 max-w-7xl px-10">
        {/* Filters */}
        <div className="mb-8 flex items-center space-x-4">
          <Select
            value={selectedMonth || ""}
            onValueChange={(value) =>
              setSelectedMonth(value === "" ? null : value)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Months</SelectItem>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedYear || ""}
            onValueChange={(value) =>
              setSelectedYear(value === "" ? null : value)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(selectedMonth || selectedYear) && (
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>
        <div className="mb-4 text-gray-600">
          {filteredReleases.length} ARTICLES
        </div>
        {/* Articles Grid */}
        <div className="grid grid-cols-responsive250 gap-6">
          {filteredReleases.map((release) => (
            <div
              key={release.id}
              className="rounded-lg border p-6 transition-shadow hover:shadow-md"
            >
              <NewspaperIcon />
              <h2 className="mb-2 text-xl font-semibold">{release.title}</h2>
              <p className="mb-4 text-gray-600">{release.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {release.date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Button variant="link" className="text-blue-600">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredReleases.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No press releases found matching your filters.
          </div>
        )}
      </section>
    </div>
  );
}
