import { useEffect, useState } from 'react'
import './App.css'

import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient();

function App() {
  const [products, setProducts] = useState<{
    id: string;
    productCode: string;
    productName: string;
    productDescription: string;
    productPrice: number;
  }[]>([]);

  const [productCode, setProductCode] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productPrice, setProductPrice] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      const result = await prisma.product.findMany();
      setProducts(result)
    }

    fetchProduct();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await prisma.product.create({
        data: {
          productCode,
          productName,
          productDescription,
          productPrice: parseFloat(productPrice),
        }
      });

      const updatedProducts = await prisma.product.findMany();
      setProducts(updatedProducts);

      setProductCode('');
      setProductName('');
      setProductDescription('');
      setProductPrice('');

    } catch (error: any) {
      alert(error.message);
    }
  }


  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Código do produto:

            <input
              type='number'
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)} />

          </label>
          <label>
            Nome do produto:

            <input
              type='text'
              value={productName}
              onChange={(e) => setProductName(e.target.value)} />

          </label>
          <label>
            Descrição:

            <textarea
              type='text'
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)} />

          </label>
          <label>
            Preço do produto:

            <input
              type="number"
              name="price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              step="0.01"
              min="0.01" />

          </label>
          <button
            type='submit'>Salvar</button>
        </form>
      </div>

      <div>
        <h2>Lista dos produtos cadastrados:</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.productCode} - {product.productName} - {product.productDescription} - {product.productPrice}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
