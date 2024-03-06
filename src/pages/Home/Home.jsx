// src/pages/Home.js
// import React from 'react';
import TranslationForm from '../../components/TranslationForm/TranslationForm.jsx';
import TranslationDisplay from '../../components/TranslationDisplay/TranslationDisplay.jsx';

function Home() {
  return (
    <div>
      <h1>Welcome to the Language Translator</h1>
      <TranslationForm />
      <TranslationDisplay />
    </div>
  );
}

export default Home;
