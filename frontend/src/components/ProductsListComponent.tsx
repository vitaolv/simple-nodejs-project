import axios from "axios"
import { useEffect, useState } from "react"

import "../styles/productsList.sass"

interface Product {
    id: number,
    productCode: string,
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
        <div className="productList">
            <h3>Lista dos produtos cadastrados:</h3>
            <ul className="ul-productList">
                {Array.isArray(products) && products.map((product) => (
                    <li key={product.id}>
                        <span grid-column="1">{product.productName}</span>
                        <span grid-column="2">{product.productDescription}</span>
                        <span grid-column="3">{product.productPrice}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}