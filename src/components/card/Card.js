import "./Card.css";
import bookmarkLogoBlack from "../../images/bookmark-icon-black.png";
import { useState } from "react";

function Card({ question, answer, tags }) {
  const [answerIsVisible, setVisibility] = useState(false);

  const handleToggleAnswer = () => {
    setVisibility(!answerIsVisible);
  };

  return (
    <div className="card">
      <button className="card__bookmark-button" data-js="bookmark">
        <img src={bookmarkLogoBlack} alt="bookmarkbutton"></img>
      </button>
      <div className="card__question">{question}</div>
      <button
        className="card__answer-button"
        data-js="answer-button"
        onClick={handleToggleAnswer}
      >
        {answerIsVisible === false ? "Show answer" : "Hide answer"}
      </button>

      {answerIsVisible === true ? 
      <div className="card__question" data-js="answer">
        {answer}
      </div> : ""}


      <div className="tag-container">
        {tags.map((tag) => {
          return (
            <div key={Math.random()} className="tag-container__tag">
              #{tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
