import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import "./Faq.scss";
import Question from "./Question";
import { questions } from "./data";

const Faq = () => {
  return (
    <section className="faq-sec">
      <div className="container faq">
        <div className="title --center-all">
          <MdOutlineLibraryBooks size={30} color="orangered" />
          <h2 className="--mb2">FAQS</h2>
          <p className="--text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            itaque veniam laudantium, quam quas dolor tempora eligendi officia
            sequi. Iusto.
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
