import { useNavigate } from "react-router-dom";
import ExampleAIResponse from "./examples/ExampleAIResponse";
import PageWrapper from "./components/PageWrapper";

function ExampleAIResponsePage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="content-card">
        <h1>AI Response Example</h1>

        <ExampleAIResponse />

        <div className="button-row">
          <button className="btn-secondary" onClick={() => navigate("/example")}>
            Back to Example
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default ExampleAIResponsePage;
