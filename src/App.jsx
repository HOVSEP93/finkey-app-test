import {
  Navbar,
  Hero,
  ServicesGroupA,
  ServicesGroupB,
  ServicesGroupC,
  ServicesGroupD,
  CTAFooter,
  Contact,
  ScrollTop,
  Timeline,
} from "./components";

const App = () => {
  return (
    <div className="xl:max-w-[1280px] mx-auto sm:w-full  ">
      <Navbar />
      <Hero />
      <ServicesGroupA />
      <ServicesGroupB />
      <ServicesGroupC />
      <Timeline />
      <ServicesGroupD />
      <Contact />
      <CTAFooter />
      <ScrollTop />
    </div>
  );
};

export default App;
