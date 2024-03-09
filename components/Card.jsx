// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import flashcardImage from "/flashcard.webp";


// eslint-disable-next-line react/prop-types
const Card = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Reset showAnswer whenever the question or answer changes
  useEffect(() => {
    setShowAnswer(false);
  }, [question, answer]);

  return (
    <div className="card" onClick={toggleAnswer}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={flashcardImage} alt="Flashcard" />
          <h2>{question}</h2>
        </div>
        <div className="flip-card-back">
          <h2>{answer}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;