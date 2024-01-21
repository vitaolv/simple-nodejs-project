"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const PORT = 8000;
app.use(cors());
app.use(express_1.default.json());
app.get('/api/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield prisma.product.findMany();
        res.json(item);
    }
    catch (err) {
        res.status(500).json({ error: 'Erro ao obter produtos' });
    }
    return Promise.resolve();
}));
app.get('/api/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.id;
        const product = yield prisma.product.findUnique({
            where: { id: itemId },
        });
        if (!product) {
            res.status(404).json({ message: "O produto não foi encontrado." });
        }
        res.json(itemId);
    }
    catch (err) {
        res.status(500).json({ error: 'Erro ao obter produtos' });
    }
    return Promise.resolve();
}));
app.post('/api/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productCode, productName, productDescription, productPrice } = req.body;
        if (!productCode ||
            !productName ||
            !productDescription ||
            !productPrice) {
            return res.status(400).json({ message: "Campos obrigatório não preenchido." });
        }
        const newData = yield prisma.product.create({
            data: {
                productCode,
                productName,
                productDescription,
                productPrice
            }
        });
        res.status(200).json(newData);
    }
    catch (err) {
        res.status(500).json({ error: "Erro ao criar um novo produto." });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
app.delete("/api/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({ message: "ID do produto não encontrado." });
        }
        if (id) {
            const deletedProduct = yield prisma.product.delete({
                where: { id },
            });
        }
        res.status(204).json({ message: 'Produto foi deletado com sucesso!' });
    }
    catch (err) {
        res.status(500).json({ error: 'Erro ao deletar o produto.' });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
app.patch('/api/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        if (!productId) {
            res.status(404).json({ message: "ID do produto não encontrado." });
        }
        const { id, productCode, productName, productDescription, productPrice } = req.body;
        const editedProduct = yield prisma.product.update({
            where: { id: productId },
            data: {
                productCode,
                productName,
                productDescription,
                productPrice
            }
        });
        res.status(200).json({ message: "O produto foi atualizado com sucesso!" });
    }
    catch (err) {
        res.status(504).json({ error: 'Erro ao editar o produto.' });
    }
    finally {
        yield prisma.$disconnect();
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
