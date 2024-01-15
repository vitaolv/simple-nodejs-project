import axios from "axios"
import { useEffect, useState } from "react"

interface Product {
    id: number,
    productName: string,
    productDescription: string,
    productPrice: number,
}


export function ProductsListComponent() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {

        async function getProducts() {
            try {
                const response = await axios.get('http://localhost:8000/api/products');

                if (response.status === 200) {
                    setProducts(response.data)
                }

            } catch (error: unknown) {
                alert(error)
            }
        }

        getProducts()
    }, [])


    return (
        <div>
            <h3>Lista dos produtos cadastrados:</h3>
            <ul>
                {Array.isArray(products) && products.map((product) => (
                    <li key={product.id}>
                        <h4>
                            {product.productName}
                            {product.productDescription}
                            {product.productPrice}
                        </h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}