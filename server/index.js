const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'user@test.com' && password === 'securepass') {
    res.json({ success: true, token: '123abc' });
  } else {
    res.status(401).json({ success: false });
  }
});

app.get('/appointments', (req, res) => {
  res.json([{ date: '2025-07-25', doctor: 'Dr. Green', type: 'Cannabis consult' }]);
});

app.listen(4000, () => console.log('Server running on port 4000'));
