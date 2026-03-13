import { useNavigate } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>LGC LearnLogic CODE</h1>
        <p className="muted">Learn how to learn code.</p>

        <div className="section-spacer">
          <h2>Why this system exists</h2>
          <p>
            Most people try to learn programming by copying code or memorizing
            syntax.
            This system focuses on something different: understanding execution
            flow.
          </p>
          <p>
            Instead of asking:
            <br />
            "How do I write this code?"
          </p>
          <p>
            You learn to ask:
            <br />
            "What actually happens when this code runs?"
          </p>
        </div>

        <div className="section-spacer">
          <h2>What you will practice here</h2>
          <ul>
            <li>Reading code line-by-line</li>
            <li>Tracking execution flow</li>
            <li>Identifying cause and effect</li>
            <li>Asking precise technical doubts</li>
            <li>Building strong debugging instincts</li>
          </ul>
        </div>

        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate("/agenda")}>
            Continue
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Home;
