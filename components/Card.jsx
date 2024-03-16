// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import flashcardImage from "/flashcard.webp";


// eslint-disable-next-line react/prop-types
const Card = ({ question, answer, userAnswer, setUserAnswer, showFeedback, isAnswerCorrect }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };


  useEffect(() => {
    setShowAnswer(false);
  }, [question, answer]);

  return (
    <div className="card" onClick={toggleAnswer}>
      <div className={`flip-card-inner ${showAnswer ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img src={flashcardImage} alt="Flashcard" />
          <h2 className="card-text">{question}</h2>
        </div>
        <div className="flip-card-back">
          {showFeedback && (
            <p className={`feedback-text ${isAnswerCorrect ? "correct" : "incorrect"}`}>
              {isAnswerCorrect ? "Correct!" : "Incorrect!"}
            </p>
          )}
          <h2 className={`card-text ${isAnswerCorrect ? "correct" : "incorrect"}`}>{answer}</h2>
        </div>
      </div>
      <div className="input-container ignore-hover">
        <div className="input-overlay"></div>
        <input
          type="text"
          placeholder="Enter your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={showFeedback}
        />
      </div>
    </div>
  );
};

export default Card;