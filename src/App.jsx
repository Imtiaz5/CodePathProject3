import './App.css';
import { useState } from 'react';
import Card from "/components/Card";


const App = () => {
  const flashcards = [
    { question: "Who is the creator of Linux?", answer: " Linus Torvalds is the creator of Linux." },
    { question: "Where did Linus Torvalds get the idea to create the Linux kernel?", answer: "Linus Torvalds was inspired by the Unix operating system and wanted to create a free and open-source alternative to Unix." },
    { question: "What is the name of the Linux penguin mascot?", answer: "The Linux penguin mascot is named Tux." },
    { question: "What is the most widely used Linux distribution?", answer: "The most widely used Linux distribution is Ubuntu." },
    { question: "Which Linux distribution is known for its focus on security and privacy?", answer: "Tails (The Amnesic Incognito Live System) is a Linux distribution designed for privacy and anonymity." },
    { question: "Which Linux distribution is known for its minimalism and DIY approach?", answer: "Arch Linux is a Linux distribution known for its simplicity, minimalism, and focus on user control." },
    { question: "What is the purpose of the ls command in Linux?", answer: "The ls command is used to list directory contents." },
    { question: "Explain the difference between rm and rmdir commands in Linux.", answer: "The rm command is used to remove files, while the rmdir command is used to remove directories." },
    { question: "Explain the purpose of the chmod command in Linux.", answer: "The chmod command is used to change the permissions of files and directories in Linux." },
    { question: "What is the function of the sudo command in Linux?", answer: "The sudo command is used to execute commands with elevated privileges." },
    { question: "What is the story behind the famous 'Halloween Documents' and their impact on the Linux community?", answer: "The 'Halloween Documents' refer to a series of internal Microsoft memos leaked to the public in 1998. " },
    { question: "What was the first commercially successful Linux distribution, and what made it stand out in the early days of Linux adoption?", answer: "The first commercially successful Linux distribution was Slackware, released in 1993." },
    { question: "List examples of Linux being used in everyday life", answer: "Android, Super Computers, Roku TV, Almost all Web Servers, Link NYC Kiosks" }
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
      <header>
        <h1>Ultimate Linux Test!</h1>
        <p>Test your Linux Knowledge!</p>
      </header>
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