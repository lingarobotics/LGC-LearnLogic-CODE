function SplashScreen({ isVisible, isFading }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={`splash-overlay ${isFading ? "fade-out" : ""}`}>
      <div className="splash-content">
        <h1>LGC LearnLogic CODE</h1>
        <p className="splash-version">Version 2.0</p>
        <p className="splash-tagline">Learn . Govern. Construct</p>
      </div>
    </div>
  );
}

export default SplashScreen;
