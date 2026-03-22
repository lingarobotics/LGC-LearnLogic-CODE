import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function ExampleFlowGuide() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>What Should You Do Next?</h1>

        <div className="callout">
          <p>
            You have now seen both the transcript and the AI-generated
            explanation.
          </p>

          <p className="muted">
            Do not rush forward. Choose the next step intentionally.
          </p>
        </div>
      </section>

      <section className="content-card">
        <h2>Learn How to Read the AI Explanation</h2>

        <p>
          If this is your first time using this system, or if the explanation
          felt dense, start here.
        </p>

        <div className="button-row">
          <button
            className="btn-primary"
            onClick={() => navigate("/example/reading-guide")}
          >
            How to Read This AI Explanation
          </button>
          <button className="btn-secondary" onClick={() => navigate("/example")}>
            Back to Example
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default ExampleFlowGuide;
