import { useLocation } from "react-router-dom";

import '../DescriptionPage/styles/DescriptionProductPage.sass'
import { DeleteButtonComponent } from "../../components/DeleteButtonComponent/DeleteButtonComponent";
import { UpdateButtonComponent } from "../../components/UpdateComponents/UpdateButtonComponent/UpdateButtonComponent";
import { ToBackButtonComponent } from "../../components/ToBackButtonComponent/ToBackButtonComponent";


export function DescriptionProductPage() {
    const location = useLocation();
    const product = location.state?.product

    return (
        <div className="ul-detailProduct">
            <h3>Detalhe do produto cadastrado</h3>
            <span>
                <ToBackButtonComponent text="Voltar para lista" classStyle="secondaryButton" srcImage="../../public/toBack.svg" />
            </span>
            <ul>
                {product && (
                    <li className="displayDetailProduct" key={product.id}>
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
                        <div className="displayButtonsInDescriptionProductPage">
                            <span>
                                <UpdateButtonComponent text="Editar" classStyle="secondaryButton" srcImage="../../public/edit.svg" product={product} />
                            </span>
                            <span>
                                <DeleteButtonComponent text="Deletar" classStyle="deleteButton" srcImage="../../public/trash.svg" />
                            </span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}