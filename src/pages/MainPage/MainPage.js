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
  Faq,
  Gallery,
  Partners
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
      <Gallery/>
      <Faq/>
      <Partners/>
      <Bounties/>
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
