import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('🚀 API Pedistan corriendo');
});

app.listen(port, () => {
  console.log(`⚡️ Server escuchando en puerto ${port}`);
});
