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
import React from "react";
import Image, { StaticImageData } from "next/image"; // Correct import for StaticImageData
import { Button } from "../ui/button";

type NewHeroProps = {
  reverse?: boolean;
  title: string;
  ImgSrc: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
  tag?: boolean;
  icon?: boolean;
  iconLink?: string | StaticImageData; // Correct type for iconLink
};

const NewHero: React.FC<NewHeroProps> = ({
  reverse = false,
  title,
  ImgSrc,
  description,
  showButton = true,
  buttonText,
  tag = false,
  icon = false,
  iconLink,
}) => {
  return (
    <section className="mx-auto mb-24 bg-gradient-to-r from-[rgba(80,206,245,0.2)] to-[rgba(255,149,87,0.2)] px-16 py-20 xl:rounded-t-none lg:p-12 lg:py-16 md:mb-16 md:px-0 sm:mb-12">
      <div
        className={`mx-auto flex w-[95%] max-w-[1200px] gap-12 2md:gap-8 md:w-[85%] md:flex-col md:gap-6 ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex w-[55%] flex-col justify-center md:mx-auto md:w-full md:text-center">
          {icon && iconLink && (
            <div>
              <Image
                src={iconLink} // Dynamically set the src for the icon
                alt="Security Image"
                className="w-[15%] mb-6 md:mx-auto sm:w-[20%]"
                width={500}
                height={500}
              />
            </div>
          )}
          {tag && (
            <p className="mb-4 self-start rounded-full bg-transparent px-3 py-1 text-xs tracking-wide text-[#808080] ring-1 ring-[#808080]">
              AWS PREMIER SERVICES & SOFTWARE PARTNER
            </p>
          )}
          <h1 className="mb-[.5em] w-[80%] font-sora text-5xl font-medium xl:text-4xl 2md:w-full md:mx-auto md:mb-[.4em] sm:w-full">
            {title}
          </h1>
          <p className="mb-[1.5em] w-[90%] text-[#808080] lg:text-[14px] md:mx-auto md:w-[80%] sm:w-[90%]">
            {description}
          </p>
          {showButton && (
            <Button className="flex w-fit items-center gap-4 rounded-3xl bg-orange-650 px-8 font-sans text-white xl:text-[12px] md:mx-auto md:w-[90%] sm:mb-4 sm:w-full">
              <span>{buttonText}</span>
            </Button>
          )}
        </div>

        <div className="image mx-auto w-[45%] max-w-[400px] self-end rounded-2xl bg-transparent md:w-full md:text-center sm:rounded-lg">
          <Image
            src={ImgSrc}
            alt="Security Image"
            className="w-full bg-white rounded-2xl"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default NewHero;
