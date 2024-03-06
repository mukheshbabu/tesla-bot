// src/components/TranslationForm.js
// import React from 'react';
import { useState } from 'react';

function TranslationForm() {
  const [inputText, setInputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en'); // Default to English
  const [targetLanguage, setTargetLanguage] = useState('fr'); // Default to French

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSourceLanguageChange = (event) => {
    setSourceLanguage(event.target.value);
  };

  const handleTargetLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement translation logic or make API call here
    // You can use the inputText, sourceLanguage, and targetLanguage state values

    // For demonstration purposes, log the values to the console
    console.log('Input Text:', inputText);
    console.log('Source Language:', sourceLanguage);
    console.log('Target Language:', targetLanguage);
  };

  return (
    <form className="translation-form" onSubmit={handleSubmit}>
      <label>
        Input Text:
        <textarea
          value={inputText}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          placeholder="Enter text for translation"
        />
      </label>

      <label>
        Source Language:
        <select value={sourceLanguage} onChange={handleSourceLanguageChange}>
          <option value="en">English</option>
          {/* Add more language options as needed */}
        </select>
      </label>

      <label>
        Target Language:
        <select value={targetLanguage} onChange={handleTargetLanguageChange}>
          <option value="fr">French</option>
          {/* Add more language options as needed */}
        </select>
      </label>

      <button type="submit">Translate</button>
    </form>
  );
}

export default TranslationForm;
