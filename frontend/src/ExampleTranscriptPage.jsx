import { useNavigate } from "react-router-dom";
import ExampleTranscript from "./examples/ExampleTranscript";

function ExampleTranscriptPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Transcript Example</h1>

      <ExampleTranscript />

      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
          The Transcript shown in above section, is sourced from freeCodeCamp's JavaScript curriculum and you can find the original <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank" rel="noopener noreferrer">here</a>.
      </p>

      <button onClick={() => navigate("/example")}>
        Back to Example
      </button>
    </main>
  );
}

export default ExampleTranscriptPage;
