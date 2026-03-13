import { useNavigate } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

function ExampleGuidePage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>How to Read This AI Explanation</h1>

        <div className="callout">
          <p>
            This guide explains how to read the AI-generated explanation shown
            in the previous asynchronous JavaScript example.
          </p>

          <p className="muted">
            The transcript used here is the same one you viewed on the Example
            Transcript page. No new material is introduced.
          </p>
        </div>
      </section>

      <section className="content-card">
        <h2>Start With the Plain Explanation</h2>
        <p>
          Ensure every sentence maps directly to the transcript.
          This section rewrites the source in simpler language without adding
          new ideas.
        </p>
      </section>

      <section className="content-card">
        <h2>Track Execution Flow</h2>
        <ul>
          <li>What runs immediately</li>
          <li>What is delegated or deferred</li>
          <li>What continues without waiting</li>
        </ul>
      </section>

      <section className="content-card">
        <h2>Use the Analogy Correctly</h2>
        <p>
          The analogy exists to explain behavior and timing, not surface
          similarity. Focus on flow, not imagery.
        </p>
      </section>

      <section className="content-card">
        <h2>Self-Check Before Moving On</h2>
        <ul>
          <li>Can you explain async vs sync in your own words?</li>
          <li>Can you describe what blocks execution and what does not?</li>
          <li>Can you explain why promises exist?</li>
        </ul>

        <div className="button-row">
          <button className="btn-secondary" onClick={() => navigate("/")}>
            Home
          </button>

          <button className="btn-secondary" onClick={() => navigate("/example")}>
            Back to Example
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default ExampleGuidePage;
