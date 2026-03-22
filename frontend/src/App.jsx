import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";
import MainAgenda from "./pages/MainAgenda";
import Transcript from "./pages/Transcript";

/* AI Prompt */
import AIPrompt from "./pages/AIPrompt";
import AIPromptFull from "./pages/AIPromptFull";

/* Reading Guides */
import ReadingGuide from "./pages/ReadingGuide";

/* Example */
import Example from "./pages/Example";
import ExampleFlowGuide from "./pages/ExampleFlowGuide";
import ExampleReadingGuide from "./pages/ExampleReadingGuidePage";

/* Example Content Pages */
import ExampleTranscriptPage from "./pages/ExampleTranscriptPage";
import ExampleAIResponsePage from "./pages/ExampleAIResponsePage";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <BrowserRouter>
      <SplashScreen isVisible={showSplash} isFading={isFading} />
      <Routes>
        {/* Core flow */}
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<MainAgenda />} />
        <Route path="/transcript" element={<Transcript />} />

        {/* AI Prompt */}
        <Route path="/ai-prompt" element={<AIPrompt />} />
        <Route path="/ai-prompt/full" element={<AIPromptFull />} />

        {/* Generic Reading Guide */}
        <Route path="/reading-guide" element={<ReadingGuide />} />

        {/* Example hub */}
        <Route path="/example" element={<Example />} />

        {/* Example decision layer */}
        <Route path="/example/flow-guide" element={<ExampleFlowGuide />} />

        {/* Example guides */}
        <Route
          path="/example/reading-guide"
          element={<ExampleReadingGuide />}
        />
        

        {/* Example deep content */}
        <Route
          path="/example/transcript"
          element={<ExampleTranscriptPage />}
        />
        <Route
          path="/example/ai-response"
          element={<ExampleAIResponsePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
