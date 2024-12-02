import React from "react";

import { CompanyData } from "@/data/shared";

import CompaniesCard from "./companies-card";

interface CompaniesProfileTwoProps {
  cards: CompanyData;
}

const CompaniesProfileTwo: React.FC<CompaniesProfileTwoProps> = ({ cards }) => {
  return (
    <div className="mx-auto mb-24 w-[90%] max-w-[1300px] rounded-2xl bg-orange-100 py-16 sm:py-12">
      <div className="mx-auto flex w-[90%] gap-4 md:flex-col">
        <div className="w-[50%] 2md:w-[50%] md:w-full">
          <CompaniesCard
            imageSrc={cards.imageSrc}
            content={cards.content}
            author={cards.author}
            showButton={cards.showButton}
            buttonText={cards.buttonText}
          />
        </div>
        <div className="w-[50%] md:w-full">
          <CompaniesCard
            imageSrc={cards.imageSrc}
            content={cards.content}
            author={cards.author}
            showButton={cards.showButton}
            buttonText={cards.buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default CompaniesProfileTwo;
