import Lottie from "lottie-react";
import animate from "../lottie/animation.json";
// import Clients from "./Clients.jsx";

const Hero = () => {
  return (
    <div className="py-5 sm:py-8 md:py-10  px-5 sm:px-10 md:px-14 text-black  relative">
      <div className="grid grid-cols-1 gap-y-6 sm:gap-x-5 sm:grid-cols-5">
        <div className="col-span-2 relative overflow-hidden rounded-lg h-64 xs:h-72 ss:h-80 md:h-96  sm:order-last ">
          <Lottie
            animationData={animate}
            loop={true}
            autoplay={true}
            className="rounded-lg shadow-md" // Apply additional Tailwind CSS classes
          />
        </div>

        <div className="max-w-xl mx-auto sm:mx-0 sm:max-w-full col-span-3 flex flex-col justify-center text-center sm:text-left items-center sm:items-start">
          <h1 className="max-w-sm sm:max-w-full  capitalize leading-[45px] sm:leading-[50px] font-[600] tracking-tight    text-[30px] xs:text-[36px] sm:text-[40px] md:text-5xl">
            FAST GREEN
            <span className="sm:block md:mt-4"> FINANCING WITH FINKEY</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg leading-7 sm:leading-8  max-w-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-8 md:mt-12 flex items-center  gap-x-6">
            <a
              href="#"
              className="rounded-lg  bg-[#65E4A3] text-slate-900 px-10 py-2.5  font-semibold  shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      {/* <Clients /> */}
      {/* Sections */}
      <div className="bg-[#d9eaca] py-12 text-center relative">
        <div className="flex flex-col">
          <div className="flex justify-center content-center">
            {/* First Loan Option */}
            <div className=" px-5 mb-2 relative">
              <p className="md:text-2xl text-lg font-bold mb-4">
                $5,000 to $50,000
              </p>
              <p className="text-lg">Unsecured</p>
            </div>

            {/* Second Loan Option */}
            <div className=" px-5 mb-2 relative">
              <p className="md:text-2xl text-lg font-bold mb-4">
                12 months to 5 years
              </p>
              <p className="text-lg">Flexible terms</p>

              <div className="absolute inset-y-0 left-0  w-0.5 bg-slate-900"></div>
            </div>

            {/* Third Loan Option */}
            <div className=" px-5 mb-2 relative">
              <div className="absolute inset-y-0 left-0  w-0.5 bg-slate-900"></div>

              <p className="md:text-2xl text-lg font-bold mb-4">
                3 months interest free
              </p>
            </div>
          </div>
          <div className=" md:my-32 my-2 py-5 md:absolute content-center md:translate-x-96 md:-translate-y-7 justify-center bg-[#012a32] mx-auto w-80 h-20 text-white">
            <h1 className=" text-white ">GET YOUR RATE NOW</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
