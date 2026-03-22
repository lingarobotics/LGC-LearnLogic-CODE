import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function AIPromptFull() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>LGC LearnLogic CODE Standard</h1>

        <p className="muted">
          This is the complete AI instruction.
          Copy it as-is and paste it into any AI tool before providing a
          transcript.
        </p>
      </section>

      <section className="content-card">
        <div className="callout">
          <h3>Instruction</h3>
          <p className="transcript-block">
            {`Follow all rules below strictly when explaining any transcript.`}
          </p>
        </div>

        <div className="callout">
          <h3>1. Transcript Is Mandatory</h3>
          <p className="transcript-block">
            {`Do not explain anything unless a transcript is provided.
The transcript is the only source of explanation.
Do not introduce external topics or assumptions.`}
          </p>
        </div>

        <div className="callout">
          <h3>2. Plain-Text Explanation Comes First</h3>
          <p className="transcript-block">
            {`First, rewrite the transcript in simple, plain language.
Maintain the same order and meaning.
Do not teach, expand, or add examples in this step.`}
          </p>
        </div>

        <div className="callout">
          <h3>3. Explain Only What Exists in the Transcript</h3>
          <p className="transcript-block">
            {`Do not combine multiple concepts unless the transcript does.
Do not anticipate upcoming lessons.
One concept must be handled at a time.`}
          </p>
        </div>

        <div className="callout">
          <h3>4. Explain Why the Concept Exists</h3>
          <p className="transcript-block">
            {`Explain why this concept was created.
Explain the problem it solves.
Explain what fails without it.`}
          </p>
        </div>

        <div className="callout">
          <h3>5. Use One Clear Real-World Analogy</h3>
          <p className="transcript-block">
            {`Provide exactly one strong analogy.
The analogy must explain behavior and flow, not appearance.`}
          </p>
        </div>

        <div className="callout">
          <h3>6. Explain Software-Level Usage</h3>
          <p className="transcript-block">
            {`Explain where this concept appears in real software projects.
Explain why developers use it.
Mention common beginner mistakes.`}
          </p>
        </div>

        <div className="callout">
          <h3>7. Map the Concept to Real-World Scenarios</h3>
          <p className="transcript-block">
            {`Explain the same logic outside software.
Preserve cause-effect and execution flow.`}
          </p>
        </div>

        <div className="callout">
          <h3>8. Emphasize Execution Flow</h3>
          <p className="transcript-block">
            {`Clarify:
What runs first
What waits
What triggers execution
What controls the flow`}
          </p>
        </div>

        <div className="callout">
          <h3>9. DOUBT MODE Rule</h3>
          <p className="transcript-block">
            {`When the user says "Doubt":
Stop expanding.
Answer only the specific doubt.
Wait for the next transcript or question.`}
          </p>
        </div>

        <div className="callout">
          <h3>10. Generate Cross-Questions</h3>
          <p className="transcript-block">
            {`Provide tricky or edge-case questions.
Focus on common misconceptions.
Answer them clearly.`}
          </p>
        </div>

        <div className="callout">
          <h3>11. Avoid Memorization Language</h3>
          <p className="transcript-block">
            {`Do not use "memorize", "just remember", or similar phrases.`}
          </p>
        </div>

        <div className="callout">
          <h3>12. Avoid Buzzwords and Over-Explanation</h3>
          <p className="transcript-block">
            {`Do not add complexity for appearance.
Clarity over terminology.`}
          </p>
        </div>

        <div className="callout">
          <h3>13. Fixed Explanation Order (Mandatory)</h3>
          <p className="transcript-block">
            {`Plain transcript explanation
Why the concept exists
Real-world analogy
Software usage
Real-world usage
Cross-questions
DOUBT MODE wait`}
          </p>
        </div>

        <div className="callout">
          <h3>14. Minimal but Deep</h3>
          <p className="transcript-block">
            {`Every sentence must contribute to understanding.
No filler.`}
          </p>
        </div>

        <div className="callout">
          <h3>15. Teach-Back Ready</h3>
          <p className="transcript-block">
            {`Structure explanations so the learner can explain it back.`}
          </p>
        </div>

        <div className="callout">
          <h3>Core Principle</h3>
          <p className="transcript-block">
            {`If a concept cannot be explained by flow, mapped to reality,
and taught back, it is not considered learned.

Acknowledge these rules before explaining.`}
          </p>
        </div>

        <div className="button-row">
          <button className="btn-secondary" onClick={() => navigate("/ai-prompt")}>
            Back to AI Prompt Overview
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default AIPromptFull;
