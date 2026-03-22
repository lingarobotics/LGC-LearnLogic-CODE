import { useNavigate } from "react-router-dom";
import ExampleTranscript from "../examples/ExampleTranscript";
import PageWrapper from "../components/PageWrapper";

function ExampleTranscriptPage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>Transcript Example</h1>
        <ExampleTranscript />

        <p className="muted section-spacer">
          The Transcript shown in above section, is sourced from freeCodeCamp's
          JavaScript curriculum and you can find the original
          <a
            href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            here
          </a>
          .
        </p>

        <div className="button-row">
          <button className="btn-secondary" onClick={() => navigate("/example")}>
            Back to Example
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default ExampleTranscriptPage;
