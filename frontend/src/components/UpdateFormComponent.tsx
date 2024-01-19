// FormFields.jsx
import { useState } from 'react';
import { Product } from '../pages/UpdatePage/UpdateProductPage';

interface FormFieldsProps {
    product: Product;
    isLoading: boolean;
    onProductChange: (product: Product) => void;
}

export function UpdateFormComponent({ product, onProductChange, isLoading }: FormFieldsProps) {
    const [productCode, setProductCode] = useState(product.productCode);
    const [productName, setProductName] = useState(product.productName);
    const [productPrice, setProductPrice] = useState(product.productPrice);
    const [productDescription, setProductDescription] = useState(product.productDescription);

    const handleProductChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedData = {
            ...product,
        };

        onProductChange(updatedData);
    };

    return (
        <form className="updateFormDisplay" onSubmit={handleProductChange}>
            <label>
                Nome do produto:

                <input
                    type="text"
                    value={productName}
                    placeholder={productName}
                    disabled={isLoading}

                    onChange={(e) => setProductName(e.target.value)}
                />

            </label>
            <label>
                Código do produto:

                <input
                    type="number"
                    value={productCode}
                    placeholder={productCode}
                    disabled={isLoading}
                    onChange={(e) => setProductCode(e.target.value)}
                />

            </label>
            <label>
                Preço:

                <input
                    value={productPrice}
                    placeholder={productPrice.toString()}
                    disabled={isLoading}
                    onChange={(e) => setProductPrice(Number(e.target.value))}
                />

            </label>
            <label>
                Descrição:

                <textarea
                    id="textareaDescriptionRegisterProduct"
                    value={productDescription}
                    placeholder={productDescription}
                    disabled={isLoading}
                    onChange={(e) => setProductDescription(e.target.value)}
                />

            </label>
            <button type='submit' className='buttonPrimary'>
                <img src="../../public/save.svg" alt="Save" />
                Salvar
            </button>
        </form>
    );
}
