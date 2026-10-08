const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>🤖 موظف ابو دافوف شغال ✅</h1><p>السيرفر المجاني Online!</p>');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'online' });
});

module.exports = app;
