// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";

// type NewHeroProps = {
//   reverse?: boolean;
// };

// const NewHero: React.FC<NewHeroProps> = ({ reverse = false }) => {
//   return (
//     <section className="mx-auto mb-32 w-[90%] max-w-[1400px] rounded-3xl bg-gradient-to-r from-[rgba(80,206,245,0.2)] to-[rgba(255,149,87,0.2)] px-16 py-24 xl:w-full xl:rounded-t-none lg:p-12 lg:py-16 2md:w-full md:mb-16 md:px-0">
//       <div
//         className={`mx-auto flex w-[95%] max-w-[1000px] gap-12 2md:gap-8 md:w-[85%] md:flex-col-reverse md:gap-6 ${
//           reverse ? "flex-row-reverse" : "flex-row"
//         }`}
//       >
//         <div className="flex w-[55%] flex-col justify-center md:mx-auto md:w-full md:text-center">
//           <h1 className="mb-[.5em] w-[90%] font-sora text-5xl font-medium xl:text-4xl 2md:w-full md:mx-auto md:mb-[.4em] sm:w-full">
//             Terverse Cloud Gateway
//           </h1>
//           <p className="mb-[1.5em] w-[90%] text-[#808080] lg:text-[14px] md:mx-auto md:w-[80%] sm:w-[90%]">
//             AWS guidance for efficient growth and foundational best practices
//           </p>
//           <Button className="flex w-fit items-center gap-4 rounded-3xl bg-orange-650 px-8 font-sans text-white xl:text-[12px] md:mx-auto md:w-[90%] sm:mb-4 sm:w-full">
//             <span>See our Solutions</span>
//           </Button>
//         </div>

//         <div className="image w-[45%] rounded-2xl border bg-white md:w-full md:text-center sm:rounded-lg">
//           <Image
//             src="/public/assets/contact"
//             alt="Security Image"
//             className="w-full"
//             width={500}
//             height={500}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewHero;

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type NewHeroProps = {
  reverse?: boolean;
  title: string;
  description: string;
  buttonText: string;
  tag?: boolean;
};

const NewHero: React.FC<NewHeroProps> = ({
  reverse = false,
  title,
  description,
  buttonText,
  tag = false,
}) => {
  return (
    <section className="mx-auto mb-32 w-[90%] max-w-[1400px] rounded-3xl bg-gradient-to-r from-[rgba(80,206,245,0.2)] to-[rgba(255,149,87,0.2)] px-16 py-24 xl:w-full xl:rounded-t-none lg:p-12 lg:py-16 2md:w-full md:mb-16 md:px-0">
      <div
        className={`mx-auto flex w-[95%] max-w-[1000px] gap-12 2md:gap-8 md:w-[85%] md:flex-col-reverse md:gap-6 ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex w-[55%] flex-col justify-center md:mx-auto md:w-full md:text-center">
          {tag && (
            <p className="mb-4 self-start rounded-full bg-transparent px-3 py-1 text-xs tracking-wide text-[#808080] ring-1 ring-[#808080]">
              AWS PREMIER SERVICES & SOFTWARE PARTNER
            </p>
          )}
          <h1 className="mb-[.5em] w-[90%] font-sora text-5xl font-medium xl:text-4xl 2md:w-full md:mx-auto md:mb-[.4em] sm:w-full">
            {title}
          </h1>
          <p className="mb-[1.5em] w-[90%] text-[#808080] lg:text-[14px] md:mx-auto md:w-[80%] sm:w-[90%]">
            {description}
          </p>
          <Button className="flex w-fit items-center gap-4 rounded-3xl bg-orange-650 px-8 font-sans text-white xl:text-[12px] md:mx-auto md:w-[90%] sm:mb-4 sm:w-full">
            <span>{buttonText}</span>
          </Button>
        </div>

        <div className="image w-[45%] rounded-2xl border bg-white md:w-full md:text-center sm:rounded-lg">
          <Image
            src="/public/assets/contact"
            alt="Security Image"
            className="w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default NewHero;
