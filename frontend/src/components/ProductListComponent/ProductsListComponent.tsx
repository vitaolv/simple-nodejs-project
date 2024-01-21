import axios from "axios"
import { useEffect, useState } from "react"

import "../../pages/HomePage/styles/productsList.sass"
import "../../pages/HomePage/styles/noData.sass"

import { DeleteButtonComponent } from "../DeleteButtonComponent/DeleteButtonComponent";
import { UpdateButtonComponent } from "../UpdateComponents/UpdateButtonComponent/UpdateButtonComponent";
import { SeeDetailButtonComponent } from "../SeeDetailButtonComponent/SeeDetailButtonComponent";
import { ModalConfirmToDeleteComponent } from "../ModalComponent/ModalConfirmToDeleteComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Product {
    id: string,
    productCode: string,
    productName: string,
    productDescription: string,
    productPrice: number,
}

export function ProductsListComponent() {
    const [products, setProducts] = useState<Product[]>([]);
    const showModal = useSelector((state: RootState) => state.modalConfirm.modalIsOpen);


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
            {products.length > 0 ? (products.map((product) => (
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
                        <SeeDetailButtonComponent text="Ver descrição" classStyle="secondaryButton" srcImage="../../public/see.svg" product={product} />
                    </span>
                    <div className="displayButtons">
                        <span>
                            <UpdateButtonComponent text="Editar" classStyle="secondaryButton" srcImage="../../public/edit.svg" product={product} />
                        </span>
                        <span>
                            <DeleteButtonComponent text="Deletar" classStyle="deleteButton" srcImage="../../public/trash.svg" />
                        </span>
                    </div>

                    {showModal &&
                        (
                            <ModalConfirmToDeleteComponent
                                textHeader={`Deletar o produto ${product.productName}`}
                                textAlert="Tem certeza de que deseja deletar este produto da lista dos produtos cadastrados?"
                                productId={product.id}
                            />)}
                </li>
            ))) : (
                <div className="NoData">
                    <img src="../../public/noData.svg" alt="Sem-dados" />
                    <h4>Opa! Não temos produtos cadastrados.</h4>
                    <p>
                        Sem problemas,
                        você pode <a href="http://localhost:5173/cadastro-de-produto">clicar aqui</a> para
                        adicionar um novo produto.
                    </p>
                </div>

            )}

        </ul>
    )
}