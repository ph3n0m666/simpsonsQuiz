import { createContext } from "react";
import QUESTIONS from "../questions.js";
import initialSimpsonsQuestions from "../initialSimpsonsQuestions.js";
export const QuestionsContext = createContext({
  questions: [],
});

export default function SimpsonsQuizProvider({ children }) {
  let questions = initialSimpsonsQuestions;

  // Function to shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to extract x random items from the array
  function extractRandomItems(array, x) {
    // Shuffle the array
    let shuffledArray = shuffleArray(array);
    // Extract the first x items from the shuffled array
    return shuffledArray.slice(0, x);
  }

  // Extract 10 random items from the original array
  let extractedRandomItems = extractRandomItems(questions, 10);
  const quizCts = {
    questions: extractedRandomItems,
  };

  return (
    <QuestionsContext.Provider value={quizCts}>
      {children}
    </QuestionsContext.Provider>
  );
}
