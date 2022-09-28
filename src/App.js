import "./App.css";
import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";
import { useState } from "react";
import Cards from "./pages/cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile"


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

  const [navState, setNavState] = useState(1);

  return (
    <div className="App">
      <Header />

      
      {navState === 1 || navState === 2 ? <Cards cards={cards} /> : navState===3 ? <Create/> : navState===4 ? <Profile/> : "" }
      
   


      <Nav navState={navState} setNavState={setNavState} />
    </div>
  );
}

export default App;
