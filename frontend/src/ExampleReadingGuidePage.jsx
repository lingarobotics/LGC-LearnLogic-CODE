import { useNavigate } from "react-router-dom";

function ExampleGuidePage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>How to Read This AI Explanation</h1>

      <div className="rule-box">
        <p>
          This guide explains how to read the AI-generated explanation
          shown in the previous asynchronous JavaScript example.
        </p>

        <p className="muted">
          The transcript used here is the same one you viewed on the
          Example Transcript page. No new material is introduced.
        </p>
      </div>

      <div className="rule-box">
        <h2>Start With the Plain Explanation</h2>
        <p>
          Ensure every sentence maps directly to the transcript.
          This section rewrites the source in simpler language
          without adding new ideas.
        </p>
      </div>

      <div className="rule-box">
        <h2>Track Execution Flow</h2>
        <ul>
          <li>What runs immediately</li>
          <li>What is delegated or deferred</li>
          <li>What continues without waiting</li>
        </ul>
      </div>

      <div className="rule-box">
        <h2>Use the Analogy Correctly</h2>
        <p>
          The analogy exists to explain behavior and timing,
          not surface similarity. Focus on flow, not imagery.
        </p>
      </div>

      <div className="rule-box">
        <h2>Self-Check Before Moving On</h2>
        <ul>
          <li>Can you explain async vs sync in your own words?</li>
          <li>Can you describe what blocks execution and what does not?</li>
          <li>Can you explain why promises exist?</li>
        </ul>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <button onClick={() => navigate("/")}>
          Home
        </button>

        <button onClick={() => navigate("/example")}>
          Back to Example
        </button>
      </div>
    </main>
  );
}

export default ExampleGuidePage;
