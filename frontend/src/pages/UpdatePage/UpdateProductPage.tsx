import "../UpdatePage/styles/updateProductPage.sass"

import { UpdateFormComponent } from '../../components/UpdateComponents/UpdateFormComponent/UpdateFormComponent';
import { useLocation, useNavigate } from 'react-router-dom'

import { useState, } from 'react';
import axios from 'axios';
import { ToBackButtonComponent } from "../../components/ToBackButtonComponent/ToBackButtonComponent";
import { Product } from "../../utils/InterfaceProduct";

export function UpdateProductPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation()


    const handleFormSubmit = async (updatedProduct: Product) => {
        setIsLoading(true);

        try {
            const response = await axios.patch(`http://localhost:8000/api/products/${updatedProduct.id}`, {
                ...updatedProduct,
            });

            if (response.status === 200) {
                alert("Produto foi atualizado!");
                navigate("/home");
            }
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <section className='UpdatePage'>
            <div className='displayUpdatePage'>
                <h3>
                    Editar o produto cadastrado
                </h3>
                <ToBackButtonComponent text="Voltar para lista" classStyle="secondaryButton" srcImage="/toBack.svg" />
            </div>
            <UpdateFormComponent
                initialProduct={location.state?.product}
                onSubmit={handleFormSubmit}
                isLoading={isLoading} />
        </section>
    );
}
