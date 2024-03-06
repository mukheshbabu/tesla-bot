// src/components/TranslationDisplay.js
// import React from 'react';

function TranslationDisplay() {
  // Assume translatedText is received from the API or translation logic
  const translatedText = "Translated text will appear here.";

  return (
    <div className="translation-display">
      <h2>Translation Result</h2>
      <p>{translatedText}</p>
    </div>
  );
}

export default TranslationDisplay;
