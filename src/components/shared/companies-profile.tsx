import React from 'react';
import CompaniesCard from './companies-card';



interface CompaniesProfileProps {
  heading: string;
  paragraph: string;
  cards: {
    imageSrc: string;
    content: string;
    author: string;
  };
}

const CompaniesProfile: React.FC<CompaniesProfileProps> = ({ heading, paragraph, cards }) => {
  return (
    <div className='mb-24 max-w-[1300px] w-[90%] rounded-2xl py-16 sm:py-12 mx-auto bg-orange-100'>
      <div className='flex gap-16 xl:gap-8 w-[90%] mx-auto md:flex-col'>
        <div className='w-[60%] self-center 2md:w-[50%] md:w-full'>
          <h2 className="mb-[.5em] mt-4 w-full font-sora text-3xl font-medium 2md:w-full 2md:text-2xl md:mx-auto md:mb-[.3em] sm:w-full sm:text-xl">
            {heading}
          </h2>

          <p className="mb-[.7em] text-[#808080] lg:text-[14px] md:mx-auto">
            {paragraph}
          </p>
        </div>
        <div className='w-[40%] 2md:w-[50%] md:w-full'>
          <CompaniesCard 
            imageSrc={cards.imageSrc}
            content={cards.content}
            author={cards.author}
          />
        </div>
      </div>
    </div>
  );
};

export default CompaniesProfile;