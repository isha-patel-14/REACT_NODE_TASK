import React, { useState } from 'react';
import './Accordion.css';

const data = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is a Hook in React?",
    answer: "Hooks are functions that let you use state and other React features without writing a class.",
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript, used with React to describe UI structure.",
  },
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2>FAQ</h2>
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="question" onClick={() => toggle(index)}>
            {item.question}
            <span className="icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
