import React, { useState } from "react";
import AOS from "aos";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FiPlus, FiMinus } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
import './Faq.css';
import faqData from "../../assets/data/faqData";
import faq_image from '../../assets/gallery/1.jpeg'
function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const navigate = useNavigate();

  // const goBack = () => {
  //   navigate("/");
  // };

  AOS.init({
    once: true,
  });

  return (
    <div className="faqPage">
      <div className="faqPage__container">
        {/* <FiArrowLeft onClick={goBack} className="goBack" /> */}
        <div className="faq__left">
          <h1 className="faq__header" data-aos="zoom-in">
            Frequently Asked Questions
          </h1>
          <div className="faq_content">
            {faqData.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === `${faq.id}`}
                onChange={handleChange(`${faq.id}`)}
                disableGutters
                elevation={0}
                sx={{
                  background: "transparent",
                  padding: 0,
                  margin: "0.5rem 0",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === `${faq.id}` ? (
                      <FiMinus className="acc__icon  bg-acc" />
                    ) : (
                      <FiPlus className="acc__icon" />
                    )
                  }
                  aria-controls={`panel${faq.id}bh-content`}
                  id={`panel${faq.id}bh-header`}
                  sx={{
                    padding: 0,
                  }}
                >
                  <h2
                    className="faq_qs"
                    data-aos="fade-up"
                    data-aos-duration={`${300 * faq.id}`}
                  >
                    {faq.question}
                  </h2>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: "0.5rem 2rem",
                  }}
                >
                  <p className="faq_ans">{faq.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="faq__right">
          <img
            src={faq_image}
            alt=""
            className="faq_image"
            data-aos="fade-up-left"
          />
        </div>
      </div>
    </div>
  );
}

export default Faq
