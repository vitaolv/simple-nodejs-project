import axios from "axios"
import { useEffect, useState } from "react"

import "../styles/productsList.sass"
import { DeleteButtonComponent } from "./DeleteButtonComponent";
import { UpdateButtonComponent } from "./UpdateButtonComponent";
import { SeeDetailButtonComponent } from "./SeeDetailButtonComponent";

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
                        <SeeDetailButtonComponent text="Ver descrição" classStyle="secundaryButton" srcImage="../../public/see.svg" />
                    </span>
                    <div className="displayButtons">
                        <span>
                            <DeleteButtonComponent text="Deletar" classStyle="deleteButton" srcImage="../../public/trash.svg" productId={product.id} />
                        </span>
                        <span>
                            <UpdateButtonComponent text="Editar" classStyle="secundaryButton" srcImage="../../public/edit.svg" productId={product.id} />
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    )
}