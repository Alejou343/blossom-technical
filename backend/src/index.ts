import express from 'express';
import dotenv from 'dotenv';
import request from 'supertest';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Servidor Express con TypeScript funcionando! 🚀');
});

app.listen(PORT, () => {
    console.log(`⚡ Servidor corriendo en http://localhost:${PORT}`);
});

// test('GET / should return Hello World', async () => {
//     const response = await request(app).get('/');
//     expect(response.text).toBe('Hello World');
// });
