// src/components/TranslationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TranslationForm = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('vi');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/translate-text', {
        q: text,
        source: sourceLang,
        target: targetLang
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error while translating:', error);
    }
  };

  return (
    <div>
      <h2>Translate Text</h2>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleTranslate}>Translate</button>
      <br />
      <h3>Translated Text:</h3>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslationForm;
