import React from "react";
import "./Contacts.css";
import persona from "../../assets/png/persona.png";
import persona2 from "../../assets/png/persona2.png";
import ContactCard from "./ContactCard";
const contactsData = [
  {
    id: 1,
    name: "Nasreen K Basheer",
    designation: "Chairperson",
    image: persona,
    phone: "9605204433",
    email: "nasreenkbasheer.mec@gmail.com",
    linkedIn: "https://www.linkedin.com/in/nasreen-k-basheer-6795331a5/",
  },
  {
    id: 2,
    name: "Hemanth Sagar J C",
    designation: "General Secretary",
    image: persona2,
    phone: "7012910210",
    email: "hemanthsagar.mec@gmail.com",
    linkedIn: "https://www.linkedin.com/in/hemanth-sagar-j-c-292a98195",
  },
  {
    id: 3,
    name: "Sebin Davis",
    designation: "Joint Secretary",
    image: persona,
    phone: "8921212340",
    email: "sebindavis.mec@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sebin-davis-344782195",
  },
  {
    id: 4,
    name: "Sania Maria Sabu",
    designation: "Social Initiatives Manager",
    image: persona2,
    phone: "7306928074",
    email: "saniamariasabu.mec@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sania-maria-sabu-1b059a1b2/",
  },
];

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <h1 className="section__title">Contact us</h1>

        <div className="contact__cards">
          {contactsData.map((contact) => (
            <ContactCard
              key={contact.id}
              name={contact.name}
              designation={contact.designation}
              image={contact.image}
              phone={contact.phone}
              email={contact.email}
              linkedIn={contact.linkedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;