import "./Create.css";

export default function Create(appendCard, setNavState) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target; // Grab form Data
    console.log(form.elements);
    const { question, answer, tag } = form.elements; // deconstructure data

    appendCard(question.value, answer.value, tag.value); // create Card in App.js
    form.reset(); // Reset Form
    setNavState(1); // Go back to Home
    return console.log("sumbit works");
  };

  return (
    <form className="form">
      <label for="question">Your question:</label>
      <textarea
        name="question"
        id="question"
        rows="4"
        cols="20"
        maxLength="150"
      ></textarea>

      <p className="textcounter"></p>
      <label for="question">Your answer:</label>
      <textarea
        name="answer"
        id="answer"
        rows="4"
        cols="20"
        maxLength="150"
      ></textarea>
      <p className="textcounter"></p>
      <label for="tag">Tag:</label>
      <textarea name="tag" id="question" rows="2" cols="20"></textarea>
      <br />
      <button onClick={handleSubmit} type="submit">
        Hinzufügen
      </button>
    </form>
  );
}
