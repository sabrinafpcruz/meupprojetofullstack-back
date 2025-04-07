const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ Conectado ao MongoDB');
}).catch((err) => {
    console.error('❌ Erro ao conectar ao MongoDB:', err.message);
});

const autorRouter = require('./routes/autorRoutes');
const livrosRouter = require('./routes/livrosRoutes');

app.use('/api/autor', autorRouter);
app.use('/api/livros', livrosRouter);

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
}); 