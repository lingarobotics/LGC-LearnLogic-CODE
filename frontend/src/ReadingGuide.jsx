import { useNavigate } from "react-router-dom";

function ReadingGuide() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>How to Read AI-Generated Explanations</h1>

      <div className="rule-box">
        <p>
          AI explanations in this system are not meant to be read
          like articles or tutorials.
        </p>

        <p className="muted">
          They are structured to test and build understanding,
          not to be consumed passively.
        </p>
      </div>

      <div className="rule-box">
        <h2>How You Should Read</h2>
        <ul>
          <li>Read one section at a time</li>
          <li>Pause when a sentence explains cause and effect</li>
          <li>Ask yourself why each step exists</li>
          <li>Map explanations back to the source transcript</li>
        </ul>
      </div>

      <div className="rule-box">
        <h2>What Indicates Understanding</h2>
        <ul>
          <li>You can explain the idea in simple words</li>
          <li>You can describe the execution flow</li>
          <li>You can predict what would break without the concept</li>
        </ul>
      </div>

      <div className="rule-box">
        <h2>What to Avoid</h2>
        <ul>
          <li>Reading everything in one pass</li>
          <li>Assuming understanding because terms feel familiar</li>
          <li>Jumping ahead before isolating confusion</li>
        </ul>
      </div>

      <div className="rule-box">
        <h2>Next Step</h2>
        <p>
          Once you understand how to read AI explanations,
          apply this skill to a real example.
        </p>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <button onClick={() => navigate("/")}>
          Home
        </button>

        <button onClick={() => navigate(-1)}>
          Back
        </button>

        <button onClick={() => navigate("/example/reading-guide")}>
          Apply this to an Example
        </button>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
          The Transcript shown in above section, is sourced from freeCodeCamp's JavaScript curriculum and you can find the original <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
    </main>
  );
}

export default ReadingGuide;
