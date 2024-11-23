import React from "react";

interface Detail {
  title: string;
  description: string;
}

interface CompaniesWeServeProps {
  detailsData: Detail[];
}

const CompaniesWeServe: React.FC<CompaniesWeServeProps> = ({ detailsData }) => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto py-4">
      <h2 className="mb-[1em] mt-4 w-full font-sora text-3xl font-medium 2md:text-2xl 2md:w-full md:mx-auto sm:w-full md:text-center">
        Companies We Serve
      </h2>

      <div className=" mb-16 grid grid-cols-2 md:grid-cols-1 w-full max-w-[1200px]  justify-center gap-8 2md:items-center md:mb-16 md:flex-col">
        {detailsData.map((detail, index) => (
          <div
            key={index}
            className="w-full bg-orange-650 max-w-[600px] rounded-2xl p-6"
          >
            <h4 className="mb-[.6em] font-sans text-2xl font-medium">
              {detail.title}
            </h4>

            <p className="font-sans">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesWeServe;
