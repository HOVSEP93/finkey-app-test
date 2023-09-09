import Lottie from "lottie-react";

import { servicesGroupB } from "../constants";
import animateHand from "../lottie/animation-hand.json";

const ServicesGroupB = () => {
  return (
    <section
      id="about"
      className="md:container mx-auto mt-20 py-2 sm:mt-28 px-5 sm:px-10 bg-[#012a32] text-white"
    >
      {servicesGroupB.map((service, index) => (
        <div
          key={service.id}
          className={`mb-20 md:mb-24 grid sm:grid-cols-5 md:grid-cols-2 gap-x-10   max-w-md sm:max-w-full mx-auto`}
        >
          <div className=" sm:col-span-3  md:col-span-1 pt-10 sm:pt-24">
            <h3 className="mb-8 text-[26px] leading-8 sm:leading-[50px] xs:text-3xl  tracking-tight  sm:text-4xl">
              {service.title}
            </h3>
            {service.content.map((content) => {
              return (
                <div
                  key={content.content}
                  className={` ${
                    index === 1 &&
                    "group p-4 shadow-md hover:bg-[#0A2640] hover:text-white duration-300"
                  } mb-4 flex  items-center gap-x-3 rounded-md `}
                >
                  <p
                    className={` ${
                      index === 1 && "font-medium"
                    } text-base sm:text-lg `}
                  >
                    {content.content}
                  </p>
                </div>
              );
            })}
            <button
              className={` ${
                index === 1 && "hidden"
              } mt-6 md:mt-8 rounded-lg bg-[#ffff] px-10 py-2.5 text-lg font-semibold text-black hover:bg-white hover:ring-2 hover:ring-[#0a2640] hover:text-[#0a2640] duration-300`}
            >
              Find Out More
            </button>
          </div>
          <div
            className={` ${
              index === 1 ? "sm:order-last  sm:justify-end w-full" : ""
            } sm:col-span-2 md:col-span-1 flex justify-center relative`}
          >
            <div className="absolute top-0 left-0 right-0 translate-x-10 bottom-0 bg-[#D9E9CA] opacity-50 rounded-xl custom-star "></div>
            <img
              src={service.img}
              className="hover:scale-105 duration-300  rounded-xl custom-star object-cover"
              alt={service.id}
            />
          </div>
        </div>
      ))}
      <div className="bg-[#d9eaca] py-8 px-4 sm:grid sm:grid-cols-2 sm:gap-4 w-full text-black">
        <div className="flex justify-center content-center">
          <h1 className="text-4xl font-bold mb-4 sm:col-span-1">
            WHY CHOOSE <br /> <span className="font-semibold">FINKEY</span>
          </h1>

          <Lottie
            animationData={animateHand}
            loop={true}
            autoplay={true}
            // className="w-20 h-20 absolute translate-x-24 translate-y-10"
            className="w-24 h-24 mt-2 " // Apply additional Tailwind CSS classes
          />
        </div>
        <ul className="list-disc list-inside sm:col-span-1 my-3">
          <li className="my-2">
            We&apos;re One Of Australia&apos;s Only Dedicated Consumer
            Green-Financiers
          </li>
          <li className="my-2">
            We are a data-driven agile lending experience, helping people enrich
            their greatest assets quicker than any of our competitors.
          </li>
          <li className="my-2">
            We strive to be one of the fastest loan approvals providers in
            Australia
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesGroupB;
