import { useNavigate } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

function AIPrompt() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>LGC LearnLogic CODE Standard</h1>

        <p>
          This system does not teach concepts for you.
          It defines <strong>how AI must explain</strong> a transcript.
        </p>

        <p className="muted">
          These rules exist to enforce thinking, execution flow, and honest
          understanding, not memorization.
        </p>
      </section>

      <section className="content-card">
        <h2>How this works</h2>

        <ol>
          <li>You collect a transcript from a trusted source.</li>
          <li>You apply the LGC LearnLogic CODE Standard to AI.</li>
          <li>The AI explains only what exists in the transcript.</li>
          <li>You verify understanding through explanation, not recall.</li>
        </ol>
      </section>

      <section className="content-card">
        <h2>Using the AI Instruction</h2>

        <p>
          The full instruction is intentionally kept separate to reduce
          cognitive overload.
        </p>

        <div className="button-row">
          <button className="btn-link" onClick={() => navigate("/ai-prompt/full")}>
            View full AI instruction
          </button>
        </div>
      </section>

      <section className="content-card">
        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate("/example")}>
            Want to see a real example?
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default AIPrompt;
