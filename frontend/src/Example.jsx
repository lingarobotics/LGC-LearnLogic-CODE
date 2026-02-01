import { useNavigate } from "react-router-dom";

function Example() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Example</h1>

      <p>
        This page shows a real, verifiable example of how the
        LGC LearnLogic CODE Standard is applied.
      </p>

      <p className="muted">
        Examples are not shown directly to reduce cognitive overload.
        Click only what you want to inspect.
      </p>

      <hr />

      <section>
        <h2>Transcript (Input)</h2>

        <p className="muted">
          Source: freeCodeCamp (JavaScript curriculum)
        </p>

        <button
          className="link-like"
          onClick={() => navigate("/example/transcript")}
        >
          View transcript example
        </button>
      </section>

      <hr />

      <section>
        <h2>AI Response (Output)</h2>

        <p className="muted">
          Generated strictly using the LGC LearnLogic CODE Standard.
        </p>

        <button
          className="link-like"
          onClick={() => navigate("/example/ai-response")}
        >
          View AI explanation example
        </button>
      </section>

      <hr />

      {/* Tip */}
      <p className="muted">
        Tip: Read the AI explanation slowly. Focus on execution flow,
        cause–effect, and section order before forming doubts.
      </p>

      {/* Contextual help */}
      <button
        className="link-like"
        onClick={() => navigate("/reading-guide")}
      >
        How to Read AI Explanations
      </button>

      {/* Bottom navigation */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
        <button onClick={() => navigate("/")}>
          Home
        </button>

        <button onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </main>
  );
}

export default Example;
