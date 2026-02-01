import { useNavigate } from "react-router-dom";

function MainAgenda() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>How Learning Works Here</h1>

      <p>
        Before we begin, let’s understand how learning code actually works in
        this system.
      </p>

      <section>
        <h2>The Learning Flow</h2>

        <ol>
          <li>
            <strong>Transcript</strong>
            <p>You start with raw learning material.</p>
          </li>

          <li>
            <strong>AI Explanation</strong>
            <p>
              You use AI to generate a detailed explanation using a structured
              prompt.
            </p>
          </li>

          <li>
            <strong>Reading with Intent</strong>
            <p>
              You do not read everything continuously. You pause where clarity
              breaks.
            </p>
          </li>

          <li>
            <strong>Finding Gaps</strong>
            <p>
              Confusion is identified clearly instead of being ignored.
            </p>
          </li>

          <li>
            <strong>Asking Better Doubts</strong>
            <p>
              Learning continues through focused follow-up questions.
            </p>
          </li>
        </ol>
      </section>

      <p>
        This is the process you’ll follow — not a syllabus, not a course.
      </p>

      <button onClick={() => navigate("/transcript")}>
        Continue
      </button>
    </main>
  );
}

export default MainAgenda;
