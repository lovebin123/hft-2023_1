import React from "react";
import "./Bounties.css";
// import Carousel from "../Carousel/Carousel";
import Mcard from "./Mcard";
import Marquee from "react-fast-marquee";
const Bounties = () => {
  // const carouselData = [
  //   {
  //     icon: <i className="fa fa-user"></i>,
  //     heading: "Polygon",
  //     details: [
  //       "₹10,000 for the best hack built on Ethereum, or",
  //       "₹15,000 for the best hack built on Ethereum + Polygon,",
  //       "Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!",
  //     ],
  //   },
  //   {
  //     icon: <i className="fa fa-cogs"></i>,
  //     heading: "Configuration",
  //     details: [
  //       "Manage your users and their permissions.",
  //       "Restrict access based on roles.",
  //       "Create and delete user accounts.",
  //       "Create and delete user accounts.",
  //     ],
  //   },
  //   {
  //     icon: <i className="fa fa-cogs"></i>,
  //     heading: "Conion",
  //     details: [
  //       "Manage your users and their permissions.",
  //       "Restrict access based on roles.",
  //       "Create and delete user accounts.",
  //       "Create and delete user accounts.",
  //     ],
  //   },
  //   {
  //     icon: <i className="fa fa-cogs"></i>,
  //     heading: "Con",
  //     details: [
  //       "Manage your users and their permissions.",
  //       "Restrict access based on roles.",
  //       "Create and delete user accounts.",
  //       "Create and delete user accounts.",
  //     ],
  //   },
  //   {
  //     icon: <i className="fa fa-cogs"></i>,
  //     heading: "figuration",
  //     details: [
  //       "Manage your users and their permissions.",
  //       "Restrict access based on roles.",
  //       "Create and delete user accounts.",
  //       "Create and delete user accounts.",
  //     ],
  //   },
  //   {
  //     icon: <i className="fa fa-cogs"></i>,
  //     heading: "Coration",
  //     details: [
  //       "Manage your users and their permissions.",
  //       "Restrict access based on roles.",
  //       "Create and delete user accounts.",
  //       "Create and delete user accounts.",
  //     ],
  //   },
  //   {
  //     icon: <i className="fa fa-chart-bar"></i>,
  //     heading: "Analytics",
  //     details: [
  //       "Manage your users and their permissions.",
  //       "Create and delete user accounts.",
  //     ],
  //   },
  //   // Add more carousel items as needed
  // ];

  return (
    <div className="bounties__container">
      <div className="bounties__content">
        <div className="bounties__title" data-aos="zoom-in">
          <h1 className="section__title">Bounties</h1>
        </div>

        {/* <Carousel data={carouselData} /> */}
        <div className="bounties__marque">
        

          <Marquee direction="left" speed={250} pauseOnHover={true} loop={0} delay={0} style={{textAlign:'justify', width: "60%"}}>
          <Mcard />
          <Mcard />
          <Mcard />
          <Mcard />
          
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Bounties;
