import { useNavigate } from "react-router-dom";
import ExampleAIResponse from "./examples/ExampleAIResponse";

function ExampleAIResponsePage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>AI Response Example</h1>

      <ExampleAIResponse />

      <button onClick={() => navigate("/example")}>
        Back to Example
      </button>
    </main>
  );
}

export default ExampleAIResponsePage;
