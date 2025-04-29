// controllers/translateController.js
const axios = require('axios');
const db = require('../models/db');

// Xử lý yêu cầu dịch văn bản
exports.translateText = async (req, res) => {
  const { q, source, target } = req.body;

  try {
    // Gọi API LibreTranslate để dịch văn bản
    const response = await axios.post('https://libretranslate.de/translate', {
      q: q,
      source: source,
      target: target,
      format: 'text'
    });

    const translatedText = response.data.translatedText;

    // Lưu vào cơ sở dữ liệu MySQL (lịch sử dịch)
    const query = 'INSERT INTO translations (source_text, translated_text, source_lang, target_lang) VALUES (?, ?, ?, ?)';
    db.query(query, [q, translatedText, source, target], (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error saving translation' });
        return;
      }

      res.json({ translatedText });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error during translation', error });
  }
};
