import { useNavigate } from "react-router-dom";

function ExampleFlowGuide() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>What Should You Do Next?</h1>

      <div className="rule-box">
        <p>
          You have now seen both the transcript and the AI-generated explanation.
        </p>

        <p className="muted">
          Do not rush forward. Choose the next step intentionally.
        </p>
      </div>

      <div className="rule-box">
        <h2>Learn How to Read the AI Explanation</h2>

        <p>
          If this is your first time using this system, or if the explanation
          felt dense, start here.
        </p>

        <button onClick={() => navigate("/example/reading-guide")}>
          How to Read This AI Explanation
        </button>
      </div>

      <button onClick={() => navigate("/example")}>
        Back to Example
      </button>
    </main>
  );
}

export default ExampleFlowGuide;
