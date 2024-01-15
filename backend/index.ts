import express from 'express';
const cors = require('cors');
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const PORT = 8000;

app.use(cors());

app.use(express.json())

// Create a GET route for testing
app.get('/api/products', async (req, res) => {
    try {
        const item = await prisma.product.findMany();
        res.json(item);
    } catch (err: unknown) {
        alert(err);
        res.status(500).json({error: 'Erro ao obter produtos'})
    }  
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

const products = {
      productName: 'Laptop',
      productDescription: 'A portable computer',
      productPrice: 1500.00
    }

async function post() {
    await prisma.product.create({
        data: products
    })

    await prisma.$disconnect()
}



post()