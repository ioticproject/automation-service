import express from 'express';
// rest of the code remains same
const app = express();
const PORT = 8000;

app.use(express.json())

app.get('/health', (req, res) =>
    res.send({status: "healthy"})
);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server running at https://localhost:${PORT}`);
});