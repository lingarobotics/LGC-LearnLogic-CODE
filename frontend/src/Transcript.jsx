import { useNavigate } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

function Transcript() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>Using a Transcript</h1>

        <p>
          Learning starts with raw material. In this system, that raw material
          is called a <strong>transcript</strong>.
        </p>
      </section>

      <section className="content-card">
        <h2>What counts as a transcript</h2>

        <ul>
          <li>Lecture transcripts</li>
          <li>Documentation text</li>
          <li>Tutorial explanations</li>
          <li>Any written learning material you already have</li>
        </ul>
      </section>

      <section className="content-card">
        <h2>What does NOT count</h2>

        <ul>
          <li>AI-generated explanations</li>
          <li>Summaries written by others</li>
          <li>Notes taken without understanding</li>
        </ul>
      </section>

      <section className="content-card">
        <h2>How the transcript is used</h2>

        <p>
          You will paste your transcript into an AI tool along with a
          structured prompt provided by this system.
        </p>

        <p>
          The goal is not to simplify the content, but to expand it into a
          detailed explanation that you can read, pause, and question.
        </p>
      </section>

      <section className="content-card">
        <h2>Important rule</h2>

        <div className="callout">
          <p>
            The transcript is never edited or improved. It is treated as raw
            input. Learning happens through how you process the explanation that
            follows.
          </p>
        </div>

        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate("/ai-prompt")}>
            Continue
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Transcript;
