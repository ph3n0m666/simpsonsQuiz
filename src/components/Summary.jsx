import winningHomer from "../assets/winning_homer.png";
import averageHomer from "../assets/average_homer.png";
import doh from "../assets/doh.png";
import missingBrainHomer from "../assets/missingBrainHomer.jpg";
import QUESTIONS from "../questions.js";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
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
      {/* <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol> */}
    </div>
  );
}
