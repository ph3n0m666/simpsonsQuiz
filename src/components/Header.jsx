import logoImg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Simpsons Quiz" />
      <h1>Simpsons Quiz</h1>
    </header>
  );
}
