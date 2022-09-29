import "./Create.css";

export default function Create({ appendCard, setNavState }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target); //Grab data
    const values = Object.fromEntries(data); //Grab data

    console.log(values);
    const { question, answer, tag } = values; // deconstructure data

    appendCard(question, answer, tag); // create Card in App.js
    event.target.reset(); // Reset Form
    setNavState(1); // Go back to Home
    console.log("sumbit works");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label forHTML="question">Your question:</label>
      <textarea
        name="question"
        id="question"
        rows="4"
        cols="20"
        maxLength="150"
      ></textarea>

      <p className="textcounter"></p>
      <label forHTML="question">Your answer:</label>
      <textarea
        name="answer"
        id="answer"
        rows="4"
        cols="20"
        maxLength="150"
      ></textarea>
      <p className="textcounter"></p>
      <label forHTML="tag">Tag:</label>
      <textarea name="tag" id="question" rows="2" cols="20"></textarea>
      <br />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
