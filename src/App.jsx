import Header from "./components/Header";
import Quiz from "./components/Quiz";
import SimpsonsQuizProvider from "./store/quiz-questions-context";
function App() {
  return (
    <>
      <Header />
      <main>
        <SimpsonsQuizProvider>
          <Quiz />
        </SimpsonsQuizProvider>
      </main>
    </>
  );
}

export default App;
