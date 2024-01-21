import axios from "axios"
import { useEffect, useState } from "react"

import "../../pages/HomePage/styles/productsList.sass"
import "../../pages/HomePage/styles/noData.sass"

import { DeleteButtonComponent } from "../DeleteButtonComponent/DeleteButtonComponent";
import { UpdateButtonComponent } from "../UpdateComponents/UpdateButtonComponent/UpdateButtonComponent";
import { SeeDetailButtonComponent } from "../SeeDetailButtonComponent/SeeDetailButtonComponent";
import { ModalConfirmToDeleteComponent } from "../ModalComponent/ModalConfirmToDeleteComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { isLoadingAction } from "../../store/actions/isLoadingAction";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";

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
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(isLoadingAction(true));
        setTimeout(() => {
            async function getProducts() {
                try {
                    const response = await axios.get('http://localhost:8000/api/products');

                    if (response.status === 200) {
                        setProducts(response.data)
                    }

                } catch (error: unknown) {
                    alert(error)
                } finally {
                    dispatch(isLoadingAction(false))
                }
            }
            getProducts()
            dispatch(isLoadingAction(false));
        }, 1500);
    }, [])


    return (
        <ul className="ul-productList">
            <LoadingComponent text="Atualizando os dados..." isLoading={isLoading} />

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
                                textAlert="Deseja mesmo excluir este produto da lista?"
                                productId={product.id}
                            />)}
                </li>
            ))) : (
                <div className="NoData">
                    <LoadingComponent text="Atualizando os dados..." isLoading={isLoading} />

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