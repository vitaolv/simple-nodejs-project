import axios from "axios"
import { useEffect, useState } from "react"

import "../styles/productsList.sass"
import { ButtonComponent } from "./ButtonComponent";
import { DeleteButtonComponent } from "./DeleteButtonComponent";

interface Product {
    id: string,
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
            <h3>Lista dos produtos cadastrados</h3>
            <ul className="ul-productList">
                {Array.isArray(products) && products.map((product) => (
                    <li key={product.id}>
                        <span>
                            <p className="li-header">Código:</p>
                            <p className="li-item">{product.productCode}
                            </p>
                        </span>
                        <span>
                            <p className="li-header">Nome:</p>
                            <p className="li-item">{product.productName}</p>
                        </span>
                        <span>
                            <p className="li-header">Preço:</p>
                            <p className="li-item">{product.productPrice}</p>
                        </span>
                        <span>
                            <p className="li-header">Descrição:</p>
                            <p className="li-item">{product.productDescription}</p>
                        </span>
                        <div className="displayButtons">
                            <span>
                                <ButtonComponent text="Editar" classStyle="secundaryButton" srcImage="../../public/edit.svg" />
                            </span>
                            <span>
                                <DeleteButtonComponent text="Deletar" classStyle="deleteButton" srcImage="../../public/trash.svg" productId={product.id} />

                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}