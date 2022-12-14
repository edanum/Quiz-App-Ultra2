import "./App.css";
import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";
import { useState } from "react";
import Cards from "./pages/cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { nanoid } from "nanoid";

const cards = [
  {
    id: 1,
    question: "Was ist die Quadratwurzel von -1?",
    answer: "i",
    tags: ["Mathe"],
    isBookmarked: true,
  },
  {
    id: 2,
    question: "Wer ist die Außenministerin von Deutschland?",
    answer: "Annalena Baerbock",
    tags: ["Politik"],
    isBookmarked: false,
  },

  {
    id: 3,
    question: "Wie viel Bit sind ein Byte?",
    answer: "8",
    tags: ["IT"],
    isBookmarked: true,
  },
  {
    id: 4,
    question:
      "Wie hoch ist die höchste Welle, die jemals gesurft wurde (gerundet in ganzen Zahlen)?",
    answer: "26 Meter",
    tags: ["Sport"],
    isBookmarked: false,
  },
];

function App() {
  const [navState, setNavState] = useState(1);
  const [cardsState, setCardsState] = useState(cards);

  function appendCard(question, answer, tag) {
    setCardsState([
      {
        id: nanoid(),
        question: question,
        answer: answer,
        tags: [tag],
        isBookmarked: false,
      },
      ...cards,
    ]); 
  }

  const deleteCard = (cardId) => {
    return {cardId};
  };

  return (
    <div className="App">
      <Header />

      {navState === 1 || navState === 2 ? (
        <Cards
          navState={navState}
          cardsState={cardsState}
          deleteCard={deleteCard}
        />
      ) : navState === 3 ? (
        <Create appendCard={appendCard} setNavState={setNavState} />
      ) : navState === 4 ? (
        <Profile />
      ) : (
        ""
      )}

      <Nav navState={navState} setNavState={setNavState} />
    </div>
  );
}

export default App;
