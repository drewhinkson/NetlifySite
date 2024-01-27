/** @client */

import { useState } from 'react';

export default function Questions() {
  // Array of questions and answers
  const questions = [
    { question: "What is Next.js?", answer: "Next.js is a React framework for production." },
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    // Add more questions here...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <div>
      <h1>{questions[currentIndex].question}</h1>
      <p>{questions[currentIndex].answer}</p>
      <button onClick={goToNextQuestion}>Next</button>
    </div>
  );
}
