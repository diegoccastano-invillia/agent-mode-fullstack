const express = require('express');
const cors = require('cors');
const produtosRoutes = require('./routes/produtos');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/produtos', produtosRoutes);

// Rota de teste para verificar se a API está funcionando
app.get('/', (req, res) => {
    res.json({ message: 'API de Produtos está funcionando!' });
});

app.listen(port, () => {
    const codespaceUrl = process.env.CODESPACE_NAME;
    if (codespaceUrl) {
        console.log(`Servidor rodando em:`);
        console.log(`- Codespace URL: https://${codespaceUrl}-${port}.app.github.dev`);
        console.log(`- Endpoints disponíveis:`);
        console.log(`  - GET /produtos: https://${codespaceUrl}-${port}.app.github.dev/produtos`);
        console.log(`  - GET /: https://${codespaceUrl}-${port}.app.github.dev/`);
    } else {
        console.log(`Servidor rodando em http://localhost:${port}`);
    }
});