import logoImg from "../assets/thinking_homer.png";
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Simpsons Quiz" className="square-image" />
      <h1>Simpsons Quiz</h1>
    </header>
  );
}
