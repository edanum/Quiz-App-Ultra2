import Card from "../components/card/Card"

export default function cards({ cards }) {
  return (
    <div className="cardcontainer">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            question={card.question}
            answer={card.answer}
            tags={card.tags}
          />
        );
      })}
    </div>
  );
}
