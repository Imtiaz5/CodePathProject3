import './App.css';
import { useState } from 'react';
import Card from "/components/Card";


const App = () => {
  const flashcards = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    // Add more flashcard data as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex === flashcards.length - 1 ? 0 : currentCardIndex + 1);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex(currentCardIndex === 0 ? flashcards.length - 1 : currentCardIndex - 1);
  };

  return (
    <div className="App">
      <div className="flashcard-container">
        <Card
          question={flashcards[currentCardIndex].question}
          answer={flashcards[currentCardIndex].answer}
        />
      </div>
      <div className="navigation">
        <button onClick={() => { handlePreviousCard(); }}>Previous</button>
        <button onClick={() => { handleNextCard(); }}>Next</button>
      </div>
    </div>
  );
};

export default App;