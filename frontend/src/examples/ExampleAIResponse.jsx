function ExampleAIResponse() {
  return (
    <>
      <div className="rule-box">
        <h3>Plain Transcript Explanation</h3>
        <pre>
{`Asynchronous JavaScript means some tasks do not execute immediately in sequence.
These tasks run independently from the main flow of the program.
The main advantage is that the program does not stop or freeze while waiting for slow operations.

Slow operations include fetching data from a server, reading large files, waiting for user input, and performing heavy calculations.

Synchronous JavaScript runs code line by line in the order written.
Each line must finish before the next one starts.
Execution is predictable and sequential.

In the given example, the variable is created first, then another variable is created, and finally the value is logged.
Nothing runs in the background and nothing overlaps.
This type of execution is called single-threaded synchronous execution.

A thread is a path of execution inside a program.
In synchronous programming, only one thread is active.
If that thread waits, the entire program waits.

In asynchronous JavaScript, long-running tasks are delegated.
The main thread continues running.
When the background task finishes, JavaScript processes the result later.
This keeps applications responsive and interactive.

Asynchronous programming in JavaScript is handled using callbacks, promises, and async/await.
Modern JavaScript primarily uses promises.
A promise represents a value that will be available later.
Its value is unknown when it is created and becomes known when the operation completes.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>Why the Concept Exists</h3>
        <pre>
{`Asynchronous JavaScript exists to prevent programs from becoming unresponsive.
Without asynchronous execution, any slow task would block the entire program.
This would freeze user interfaces and stop interaction.
Async allows JavaScript to continue running while waiting for slow operations to finish.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>Real-World Analogy</h3>
        <pre>
{`Asynchronous JavaScript is like ordering food at a restaurant and receiving a token.
You place the order and are free to sit, talk, or use your phone.
When the food is ready, you are notified.
The token represents a promise that will deliver the result later.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>Software Usage</h3>
        <pre>
{`Asynchronous behavior is used when fetching data from APIs, handling user interactions, uploading files, and running timers.
Developers use async code to keep interfaces responsive while background work is happening.
A common beginner mistake is assuming async code runs in order without waiting, which can cause unexpected results if not handled properly.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>Real-World (Non-Software) Usage</h3>
        <pre>
{`In real life, asynchronous behavior appears when you submit a form and receive confirmation later.
You are not required to wait without doing anything.
You continue with other tasks until the result arrives.
The flow depends on events completing, not strict order.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>Cross-Questions</h3>
        <pre>
{`Q: Does asynchronous JavaScript mean code runs faster?
A: No. It prevents blocking, not execution time.

Q: Does JavaScript run multiple threads?
A: No. JavaScript itself is single-threaded, but it coordinates background tasks.

Q: Can async operations change execution order?
A: Yes. Results may arrive later, which is why waiting mechanisms are required.

Q: Are callbacks outdated?
A: No. Promises and async/await improve readability, but callbacks still exist.`}
        </pre>
      </div>

      <div className="rule-box">
        <h3>Doubt Mode</h3>
        <pre>
{`Awaiting further questions.`}
        </pre>
      </div>
    </>
  );
}

export default ExampleAIResponse;
