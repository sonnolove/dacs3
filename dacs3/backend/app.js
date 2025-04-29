// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Cài đặt CORS
const translateRoutes = require('./routes/translateRoutes');

const app = express();

// Sử dụng middleware CORS để giải quyết vấn đề CORS giữa frontend và backend
app.use(cors());

// Middleware để phân tích body của request
app.use(bodyParser.json());

// Định nghĩa các API route
app.use('/api', translateRoutes);

// Lắng nghe kết nối từ frontend
app.listen(3001, () => {
  console.log('Backend running at http://localhost:3001');
});
