import { useNavigate } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

function Example() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>Example</h1>

        <p>
          This page shows a real, verifiable example of how the LGC LearnLogic
          CODE Standard is applied.
        </p>

        <p className="muted">
          Examples are not shown directly to reduce cognitive overload.
          Click only what you want to inspect.
        </p>
      </section>

      <section className="content-card">
        <h2>Transcript (Input)</h2>

        <p className="muted">Source: freeCodeCamp (JavaScript curriculum)</p>

        <div className="button-row">
          <button className="btn-link" onClick={() => navigate("/example/transcript")}>
            View transcript example
          </button>
        </div>
      </section>

      <section className="content-card">
        <h2>AI Response (Output)</h2>

        <p className="muted">
          Generated strictly using the LGC LearnLogic CODE Standard.
        </p>

        <div className="button-row">
          <button className="btn-link" onClick={() => navigate("/example/ai-response")}>
            View AI explanation example
          </button>
        </div>
      </section>

      <section className="content-card">
        <div className="callout">
          <p className="muted">
            Tip: Read the AI explanation slowly. Focus on execution flow,
            cause–effect, and section order before forming doubts.
          </p>
        </div>

        <div className="button-row">
          <button className="btn-secondary" onClick={() => navigate("/reading-guide")}>
            How to Read AI Explanations
          </button>
          <button className="btn-secondary" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Example;
