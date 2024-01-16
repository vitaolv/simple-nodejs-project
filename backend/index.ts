import express from 'express';

const cors = require('cors');
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const PORT = 8000;

app.use(cors());
app.use(express.json())

app.get('/api/products', async (req, res) =>  {
    try {
        const item = await prisma.product.findMany();
        res.json(item);

    } catch (err: unknown) {
        res.status(500).json({error: 'Erro ao obter produtos'})
    }  

    return Promise.resolve();
})

app.get('/api/products/:id', async (req, res) =>  {
    try {
        const itemId = req.params.id;
        const product = await prisma.product.findUnique({
            where: { id: itemId},
        })
        
        if(!product) {
            res.status(404).json({ error: "O produto não foi encontrado."})
        }
        
        res.json(itemId);
    } catch (err: unknown) {
        res.status(500).json({error: 'Erro ao obter produtos'})
    }  

    return Promise.resolve();
})

app.post('/api/products', async (req, res) => {
    try {
        const { productCode,
            productName,
            productDescription,
            productPrice } = req.body
        if (
            !productCode ||
            !productName ||
            !productDescription ||
            !productPrice ) {
                return res.status(400).json({ error: "Campos obrigatório não preenchido." });
            }
        const newData = await prisma.product.create({
            data: {
                productCode,
                productName,
                productDescription,
                productPrice
            }
        })
        res.status(200).json(newData);
    } catch (err: unknown) {
        console.log(err);
        res.status(500).json({error: "Erro ao criar um novo produto."});

    } finally {
        await prisma.$disconnect();
    }
})

app.delete("/api/products/:id", async (req, res) => {
    try{
    const id = req.params.id;

    if (!id) {
        return res.status(404).json({ error: "ID do produto não encontrado." });
    }

    if (id) {
        const deletedProduct = await prisma.product.delete({
            where: { id },
        });
    }

    res.status(204).json({ message: 'Produto foi deletado com sucesso!'});
    } catch (err : unknown) {
        res.status(500).json({ error: 'Erro ao deletar o produto.'})
    } finally {
        await prisma.$disconnect()
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})