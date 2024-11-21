import React from 'react';
import CompaniesCard from './companies-card';



interface CompaniesProfileTwoProps {
 
  cards: {
    imageSrc: string;
    content: string;
    author: string;
    buttonText?: string;
    showButton: Boolean;
  };
}

const CompaniesProfileTwo: React.FC<CompaniesProfileTwoProps> = ({  cards }) => {
  return (
    <div className='mb-24 max-w-[1300px] w-[90%] rounded-2xl py-16 sm:py-12 mx-auto bg-orange-100'>
      <div className='flex gap-4 w-[90%] mx-auto md:flex-col'>
      <div className='w-[50%] 2md:w-[50%] md:w-full'>
          <CompaniesCard 
            imageSrc={cards.imageSrc}
            content={cards.content}
            author={cards.author}
            showButton={cards.showButton}
            buttonText={cards.buttonText}
          />
        </div>
        <div className='w-[50%] md:w-full'>
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
