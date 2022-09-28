import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Nav from "./components/nav/Nav";

const cards = [
  {
    id: 1,
    question: "Was ist die Quadratwurzel von -1?",
    answer: "i",
    tags: ["Mathe"],
  },
  {
    id: 2,
    question: "Wer ist die Außenministerin von Deutschland?",
    answer: "Annalena Baerbock",
    tags: ["Politik"],
  },

  {
    id: 3,
    question: "Wie viel Bit sind ein Byte?",
    answer: "8",
    tags: ["IT"],
  },
  {
    id: 4,
    question:
      "Wie hoch ist die höchste Welle, die jemals gesurft wurde (gerundet in ganzen Zahlen)?",
    answer: "26 Meter",
    tags: ["Sport"],
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className="cardcontainer">
        {cards.map(card => {
          return <Card key={card.id} question={card.question} answer={card.answer} tags={card.tags} />
        })}
        
      </div>
      <Nav />
    </div>
  );
}

export default App;
