import React, { useState } from "react";
import "../styles/faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I donate blood?",
      answer:
        "To donate blood, you need to visit a nearby blood bank or donation camp. Ensure you meet the eligibility criteria, such as being in good health and aged between 18 and 65.",
    },
    {
      question: "Who is eligible to donate blood?",
      answer:
        "Anyone aged between 18 and 65, weighing at least 50 kg, and in good health can donate blood. Specific eligibility criteria may vary by region.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "You can donate whole blood every 56 days. For other types of donations, such as platelets, the interval may be shorter.",
    },
    {
      question: "Is donating blood safe?",
      answer:
        "Yes, donating blood is safe. Sterile equipment is used for each donor, and the process is supervised by trained medical professionals.",
    },
    {
      question: "How long does it take?",
      answer: "15-30 minutes to donate including the pre-donation check-up.",
    },
    {
      question: "What should I do before donating blood?",
      answer:
        "Before donating blood, ensure you are well-hydrated, have eaten a healthy meal, and bring a valid ID. Avoid alcohol and heavy exercise before donation.",
    },
    {
      question: "Used for?",
      answer:
        "Used for bleeding patients with coagulation factor deficiency such as hemophilia A and B, von willibrand disease etc. also used in cases of blood loss due to trauma.",
    },
  ];

  const bloodComponents = [
    {
      title: "Red Blood Cells (RBC)",
      description:
        "Red Blood Cells carry oxygen from the lungs to the rest of the body and return carbon dioxide for exhalation. They are crucial for maintaining energy levels and overall health.",
    },
    {
      title: "White Blood Cells (WBC)",
      description:
        "White Blood Cells are part of the immune system and help fight infections. They protect the body against both infectious diseases and foreign invaders.",
    },
    {
      title: "Platelets",
      description:
        "Platelets are tiny cell fragments that help in blood clotting. They are essential for preventing excessive bleeding and promoting wound healing.",
    },
    {
      title: "Plasma",
      description:
        "Plasma is the straw-colored liquid in blood, used to create 18 medical products. It is obtained from whole blood or through apheresis.",
    },
  ];

  return (
    <div className="main-page">
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{item.question}</div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}

      <h2>Understanding Blood Components</h2>
      <div className="blood-components">
        {bloodComponents.map((component, index) => (
          <div key={index} className="blood-card">
            <h3>{component.title}</h3>
            <p>{component.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
