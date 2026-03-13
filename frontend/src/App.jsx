import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";

import Home from "./Home";
import MainAgenda from "./MainAgenda";
import Transcript from "./Transcript";

/* AI Prompt */
import AIPrompt from "./AIPrompt";
import AIPromptFull from "./AIPromptFull";

/* Reading Guides */
import ReadingGuide from "./ReadingGuide";

/* Example */
import Example from "./Example";
import ExampleFlowGuide from "./ExampleFlowGuide";
import ExampleReadingGuide from "./ExampleReadingGuidePage";

/* Example Content Pages */
import ExampleTranscriptPage from "./ExampleTranscriptPage";
import ExampleAIResponsePage from "./ExampleAIResponsePage";

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
