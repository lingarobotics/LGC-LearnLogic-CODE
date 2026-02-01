import { useNavigate } from "react-router-dom";

function AIPromptFull() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>LGC LearnLogic CODE Standard</h1>

      <p className="muted">
        This is the complete AI instruction.
        Copy it as-is and paste it into any AI tool before providing a transcript.
      </p>

      <div className="rule-box">
        <h3>Instruction</h3>
        <pre>
{`Follow all rules below strictly when explaining any transcript.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>1. Transcript Is Mandatory</h3>
        <pre>
{`Do not explain anything unless a transcript is provided.
The transcript is the only source of explanation.
Do not introduce external topics or assumptions.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>2. Plain-Text Explanation Comes First</h3>
        <pre>
{`First, rewrite the transcript in simple, plain language.
Maintain the same order and meaning.
Do not teach, expand, or add examples in this step.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>3. Explain Only What Exists in the Transcript</h3>
        <pre>
{`Do not combine multiple concepts unless the transcript does.
Do not anticipate upcoming lessons.
One concept must be handled at a time.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>4. Explain Why the Concept Exists</h3>
        <pre>
{`Explain why this concept was created.
Explain the problem it solves.
Explain what fails without it.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>5. Use One Clear Real-World Analogy</h3>
        <pre>
{`Provide exactly one strong analogy.
The analogy must explain behavior and flow, not appearance.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>6. Explain Software-Level Usage</h3>
        <pre>
{`Explain where this concept appears in real software projects.
Explain why developers use it.
Mention common beginner mistakes.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>7. Map the Concept to Real-World Scenarios</h3>
        <pre>
{`Explain the same logic outside software.
Preserve cause-effect and execution flow.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>8. Emphasize Execution Flow</h3>
        <pre>
{`Clarify:
What runs first
What waits
What triggers execution
What controls the flow`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>9. DOUBT MODE Rule</h3>
        <pre>
{`When the user says “Doubt”:
Stop expanding.
Answer only the specific doubt.
Wait for the next transcript or question.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>10. Generate Cross-Questions</h3>
        <pre>
{`Provide tricky or edge-case questions.
Focus on common misconceptions.
Answer them clearly.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>11. Avoid Memorization Language</h3>
        <pre>
{`Do not use “memorize”, “just remember”, or similar phrases.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>12. Avoid Buzzwords and Over-Explanation</h3>
        <pre>
{`Do not add complexity for appearance.
Clarity over terminology.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>13. Fixed Explanation Order (Mandatory)</h3>
        <pre>
{`Plain transcript explanation
Why the concept exists
Real-world analogy
Software usage
Real-world usage
Cross-questions
DOUBT MODE wait`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>14. Minimal but Deep</h3>
        <pre>
{`Every sentence must contribute to understanding.
No filler.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>15. Teach-Back Ready</h3>
        <pre>
{`Structure explanations so the learner can explain it back.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>Core Principle</h3>
        <pre>
{`If a concept cannot be explained by flow, mapped to reality,
and taught back, it is not considered learned.

Acknowledge these rules before explaining.`}
        </pre>
      </div>

      <button onClick={() => navigate("/ai-prompt")}>
        Back to AI Prompt Overview
      </button>
    </main>
  );
}

export default AIPromptFull;
