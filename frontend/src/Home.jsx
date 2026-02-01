import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>LGC LearnLogic Code</h1>

      <p>
        Let’s start learning how to learn code.
      </p>

      <button onClick={() => navigate("/agenda")}>
        Continue
      </button>
    </main>
  );
}

export default Home;
