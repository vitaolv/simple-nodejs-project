import { Product } from '../../../utils/InterfaceProduct';
import { useState, useEffect } from 'react';
interface UpdateFormProps {
    initialProduct: Product;
    onSubmit: (updatedProduct: Product) => void;
    isLoading: boolean;
}

export function UpdateFormComponent({
    initialProduct,
    onSubmit,
    isLoading,
}: UpdateFormProps) {
    const [product, setProduct] = useState<Product>(initialProduct);

    useEffect(() => {
        setProduct(initialProduct);
    }, [initialProduct]);


    const handleInternalSubmit = (field: keyof Product, value: string | number) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            [field]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(product);
    };

    return (
        <div>
            <form className="updateFormDisplay" onSubmit={handleSubmit}>
                <label>
                    Nome do produto:
                    <input
                        type="text"
                        value={product?.productName}
                        placeholder={product.productName}
                        disabled={isLoading}
                        onChange={(e) => handleInternalSubmit('productName', e.target.value)}
                    />
                </label>
                <label>
                    Código do produto:
                    <input
                        type="number"
                        value={product?.productCode}
                        placeholder={product.productCode}
                        disabled={isLoading}
                        onChange={(e) => handleInternalSubmit('productCode', e.target.value)}
                    />
                </label>
                <label>
                    Preço:
                    <input
                        value={product?.productPrice}
                        placeholder={product?.productPrice?.toString() || ''}
                        disabled={isLoading}
                        onChange={(e) => handleInternalSubmit('productPrice', parseFloat(e.target.value))}
                    />
                </label>
                <label>
                    Descrição:
                    <textarea
                        id="textareaDescriptionRegisterProduct"
                        value={product?.productDescription}
                        placeholder={product.productDescription}
                        disabled={isLoading}
                        onChange={(e) => handleInternalSubmit('productDescription', e.target.value)}
                    />
                </label>
                <button type='submit' className='buttonPrimary'>
                    <img src="../../public/save.svg" alt="Save" />
                    Salvar
                </button>
            </form>
        </div>
    );
}
