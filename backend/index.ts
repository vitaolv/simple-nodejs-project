import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const PORT = 8000;

app.use(express.json())

// Create a GET route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Hello, Prisma!' })
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