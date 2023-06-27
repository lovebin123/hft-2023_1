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
  Bounties,
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
      <Bounties/>
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
