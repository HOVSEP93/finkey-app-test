import React from "react";

const TimelineStep = ({ stepNumber, title, description, num }) => (
  <div className="relative flex items-center max-w-2xl    p-4">
    <div className="w-8 h-8 text-5xl   text-black ">{num}</div>
    <div className="ml-4 my-5">
      <h2 className="text-2xl font-semibold p-2  bg-[#D9E9CA] mb-2">{title}</h2>
      <p className="text-xl text-white p-4 bg-[#012A32]">{description}</p>
    </div>
    {/* Line above and below step */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-full bg-black"></div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1  bg-black"></div>
  </div>
);

const VerticalTimeline = ({ steps }) => (
  <div className="relative">
    {/* Vertical line */}
    <div
      className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full bg-black w-0.5
    "
    ></div>

    {/* Timeline Steps */}
    <div className="flex flex-col justify-between items-center h-full">
      {steps.map((step, index) => (
        <TimelineStep
          key={index}
          stepNumber={index + 1}
          title={step.title}
          num={step.num}
          description={step.description}
        />
      ))}
    </div>
  </div>
);

const Timeline = () => {
  const steps = [
    {
      num: 1,
      title: "Takes less than two minutes.",

      description: "Takes less than two minutes.",
    },
    {
      num: 2,
      title: "PERSONALISED GREEN RATE",
      description:
        "Generate your competitive green rate in less than two minutes for homeowners seeking sustainable or green projects.",
    },
    {
      num: 3,
      title: "APPLICATION ONLINE",
      description:
        "Agile application process with no lengthy requirement to upload documents.",
    },
    {
      num: 4,
      title: "FUNDING",
      description:
        "Unconditional approval in as little as two hours, with payment settled to your selected tradesperson within 24 hours.",
    },
  ];

  return (
    <div className="flex-col  justify-center items-center">
      <div className="my-10 text-center">
        <h1 className="sm:text-6xl text-2xl text-zinc-500 mb-4">
          EASY, SIMPLE STEPS
        </h1>
        <p className="sm:text-4xl text-xl text-[#067343]">
          SEEMLESS APPLICATION PROCESS FOR CUSTOMERS AND TRADIES.
        </p>
      </div>
      <VerticalTimeline steps={steps} />
      <div className="flex justify-center w-full my-10">
        <div className="bg-[#D9E9CA] p-4 m-2 flex flex-col items-center w-full">
          <h1 className="text-xl font-semibold">
            Homeowners get your no-obligation Green Rate
          </h1>
          <a href="#" className="underline text-black hover:text-[#067343]">
            APPLY ONLINE
          </a>
        </div>
        <div className="bg-[#012A32] text-white p-4 m-2 flex flex-col items-center w-full">
          <h1 className="text-xl font-semibold">
            Tradies help your customers pay you on time
          </h1>
          <a href="#" className="underline text-white hover:text-[#067343]">
            REGISTER HERE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
