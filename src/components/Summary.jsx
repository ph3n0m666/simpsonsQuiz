import winningHomer from "../assets/winning_homer.png";
import averageHomer from "../assets/average_homer.png";
import doh from "../assets/doh.png";
import missingBrainHomer from "../assets/missingBrainHomer.jpg";
import { useState, useContext } from "react";
import { QuestionsContext } from "../store/quiz-questions-context.jsx";
export default function Summary({ userAnswers }) {
  const [revealAnswers, setRevealAnswers] = useState(false);
  const { questions } = useContext(QuestionsContext);
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;

  let whatImageToShow = "";
  if (correctAnswers.length === userAnswers.length) {
    whatImageToShow = winningHomer;
  } else if (skippedAnswers.length === userAnswers.length) {
    whatImageToShow = doh;
  } else if (correctAnswers.length === skippedAnswers.length) {
    whatImageToShow = averageHomer;
  } else {
    whatImageToShow = missingBrainHomer;
  }
  function handleShowAnswers() {
    setRevealAnswers((prevReveal) => {
      return !prevReveal;
    });
  }
  return (
    <div id="summary">
      <img src={whatImageToShow} alt="Quiz is complete" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <div className="simpsonsButtonContainer">
        <button onClick={handleShowAnswers} className="simpsonsButton">
          Reveal Answers
        </button>
      </div>
      {revealAnswers && (
        <ol>
          {userAnswers.map((answer, index) => {
            let cssClasses = "user-answer";

            if (answer === null) {
              cssClasses += " skipped";
            } else if (answer === questions[index].answers[0]) {
              cssClasses += " correct";
            } else {
              cssClasses += " wrong";
            }

            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{questions[index].text}</p>
                <p className={cssClasses}>{answer ?? "Skipped"}</p>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
