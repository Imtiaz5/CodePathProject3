import './App.css';
import { useState } from 'react';
import Card from "/components/Card";


const App = () => {
  const flashcards = [
    { question: "Who is the creator of Linux?", answer: " Linus Torvalds" },
    { question: "Where did Linus Torvalds get the idea to create the Linux kernel?", answer: "Unix Operating System" },
    { question: "What is the name of the Linux penguin mascot?", answer: "Tux" },
    { question: "What is the most widely used Linux distribution?", answer: "Ubuntu" },
    { question: "Which Linux distribution is known for its focus on security and privacy?", answer: "Tails OS" },
    { question: "Which Linux distribution is known for its minimalism and DIY approach?", answer: "Arch Linux" },
    { question: "What is the purpose of the ls command in Linux?", answer: "List directory contents" },
    { question: "Explain the difference between rm and rmdir commands in Linux.", answer: "Remove files and remove directories" },
    { question: "Explain the purpose of the chmod command in Linux.", answer: "Change the permissions of files and directories" },
    { question: "What is the function of the sudo command in Linux?", answer: "Execute commands with elevated privileges" },
    { question: "What is the name of the documents that had an impact on the Linux community?", answer: "Halloween Documents" },
    { question: "What was the first commercially successful Linux distribution, and what made it stand out in the early days of Linux adoption?", answer: "Slackware" },
    { question: "Where is linux mostly used?", answer: "Web Servers" }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex === flashcards.length - 1 ? 0 : currentCardIndex + 1);
    setUserAnswer('');
    setShowFeedback(false);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex(currentCardIndex === 0 ? flashcards.length - 1 : currentCardIndex - 1);
    setUserAnswer('');
    setShowFeedback(false);
  };

  const handleSubmit = () => {
    const correctAnswer = flashcards[currentCardIndex].answer;
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    setIsAnswerCorrect(isCorrect);
    setShowFeedback(true);
  };

  return (
    <div className="App">
      <header>
        <h1>Ultimate Linux Test!</h1>
        <p>Test your Linux Knowledge!</p>
      </header>
      <div className="flashcard-container">
        <Card
          question={flashcards[currentCardIndex].question}
          answer={flashcards[currentCardIndex].answer}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          showFeedback={showFeedback}
          isAnswerCorrect={isAnswerCorrect}
        />
      </div>
      <div className="navigation">
        <button onClick={handlePreviousCard}>Previous</button>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default App;