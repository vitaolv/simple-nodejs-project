import { useState } from "react";
import axios from "axios";

export function FormComponent() {
    const [productCode, setProductCode] = useState<string>('');
    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [productPrice, setProductPrice] = useState<string>('');

    const productPriceNumber = parseFloat(productPrice); // Ensure it's a valid number


    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/products", {
                productCode,
                productName,
                productDescription,
                productPrice: productPriceNumber
            });
            console.log(response)
            if (response.status === 200) {
                alert('Success!');
            }
        } catch (error: unknown) {
            alert(error);
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Código do produto:

                        <input
                            type='number'
                            value={productCode}
                            onChange={(e) => setProductCode(e.target.value)} />

                    </label>
                    <label>
                        Nome do produto:

                        <input
                            type='text'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)} />

                    </label>
                    <label>
                        Descrição:

                        <textarea
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)} />
                    </label>
                    <label>
                        Preço:

                        <input
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)} />
                    </label>

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    )
}