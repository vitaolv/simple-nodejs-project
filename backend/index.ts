import express from 'express';

const cors = require('cors');
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const port = process.env.PORT || 8000;

app.use(cors({
    origin: 'https://cadastro-de-produtos-how6.onrender.com'
}));

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
            res.status(404).json({ message: "O produto não foi encontrado."})
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
                return res.status(400).json({ message: "Campos obrigatório não preenchido." });
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
        res.status(500).json({error: "Erro ao criar um novo produto."});

    } finally {
        await prisma.$disconnect();
    }
})

app.delete("/api/products/:id", async (req, res) => {
    try{
    const id = req.params.id;

    if (!id) {
        return res.status(404).json({ message: "ID do produto não encontrado." });
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

app.patch('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id

        if(!productId) {
            res.status(404).json({ message: "ID do produto não encontrado."})
        }

        const { id,
                productCode,
                productName,
                productDescription,
                productPrice } = req.body

        const editedProduct = await prisma.product.update({
            where: { id: productId  },
            data: {
                    productCode,
                    productName,
                    productDescription,
                    productPrice
                }
            })
            res.status(200).json({ message: "O produto foi atualizado com sucesso!"})
    } catch (err : unknown) {
        res.status(504).json({ error: 'Erro ao editar o produto.' })
    } finally {
        await prisma.$disconnect()
    }
})

app.get('/test-direct', (req, res) => {
    res.send('Direct test route');
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });