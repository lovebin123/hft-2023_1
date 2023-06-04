import React from "react";
import {
  Navbar,
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
      <Navbar/>
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
