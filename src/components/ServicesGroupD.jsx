import Lottie from "lottie-react";

import { servicesGroupD } from "../constants";
import animateHand from "../lottie/animation-hand.json";

const ServicesGroupB = () => {
  return (
    <section className="md:container mx-auto mt-20 py-2 sm:mt-28 px-5 sm:px-10 bg-[#012a32] text-white">
      {servicesGroupD.map((service, index) => (
        <div
          key={service.id}
          className={`mb-20 md:mb-24 grid sm:grid-cols-5 md:grid-cols-2 gap-x-10   max-w-md sm:max-w-full mx-auto`}
        >
          <div className=" sm:col-span-3  md:col-span-1 pt-10 sm:pt-24">
            <h3 className="mb-8 text-[26px] leading-8 sm:leading-[50px] xs:text-3xl  tracking-tight  sm:text-4xl">
              {service.title}
            </h3>

            <p className="text-base sm:text-lg mb-2">
              The simple requirements to borrow green can be found{" "}
              <a href="#" className="underline hover:text-[#AFCE38]">
                here
              </a>
            </p>
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
          </div>
          <div
            className={` ${
              index === 1 ? " sm:order-last  sm:justify-end w-full" : ""
            } sm:col-span-2 md:col-span-1 flex justify-center relative `}
          >
            <div className="absolute top-0 left-0 right-0 translate-x-10 bottom-0 bg-[#D9E9CA] opacity-50 rounded-xl custom-star "></div>
            <img
              src={service.img}
              className="hover:scale-105 duration-300  rounded-xl custom-star object-cover "
              alt={service.id}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGroupB;
