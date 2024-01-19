import "../UpdatePage/styles/updateProductPage.sass"

import { useLocation } from 'react-router-dom';

import { UpdateFormComponent } from '../../components/UpdateFormComponent';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Product {
    readonly id: string;
    readonly productCode: string;
    readonly productName: string;
    readonly productDescription: string;
    readonly productPrice: number;
}

export function UpdateProductPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState<Product>();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.product) {
            setProduct(location.state.product);
        }
    }, []);

    const handleFormSubmit = async () => {
        setIsLoading(true);

        try {
            const response = await axios.put(`http://localhost:8000/api/products/${product?.id}`, product);
            console.log(response);
            if (response.status === 200) {
                alert("Produto foi atualizado!");
                navigate("/home")
            }
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='UpdatePage'>
            <h3>
                Editar o produto cadastrado
            </h3>
            <form className="UpdateFormSection" onSubmit={handleFormSubmit}>
                {product && (
                    <UpdateFormComponent product={product} onProductChange={setProduct} isLoading={isLoading} />
                )}
            </form>
        </section>
    );
}
