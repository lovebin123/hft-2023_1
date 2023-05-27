import React from "react";
import {
  Hero,
  About,
  Timeline,
  WhyPrtcpt,
  Footer,
  Contacts,
  Prizes,
} from "../../components";
const MainPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyPrtcpt />
      <Timeline />
      <Prizes />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
