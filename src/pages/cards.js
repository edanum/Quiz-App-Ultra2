import Card from "../components/card/Card";

export default function cards({ navState,cardsState }) {
  return (
    <div className="cardcontainer">
      {cardsState.map((card) => {
        return navState === 2 ? (
          card.isBookmarked === true ? (
            <Card
              key={card.id}
              question={card.question}
              answer={card.answer}
              tags={card.tags}
              isBookmarked={card.isBookmarked}
            />
          ) : (
            ""
          )
        ) : (
          <Card
            key={card.id}
            question={card.question}
            answer={card.answer}
            tags={card.tags}
            isBookmarked={card.isBookmarked}
          />
        );
      })}
    </div>
  );
}
