import { useState } from "react";
import axios from "axios";

import '../styles/form.sass'

export function FormComponent() {
    const [productCode, setProductCode] = useState<string>('');
    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [productPrice, setProductPrice] = useState<string>('');

    const productPriceNumber = parseFloat(productPrice);


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
                window.location.reload();
                alert('Success!');
            }
        } catch (error: unknown) {
            alert(error);
        }
    }
    return (
        <div id="formBody">
            <h3 className="titleSectoinProductsList">Cadastro de produtos</h3>
            <form className="formSection" onSubmit={handleFormSubmit}>
                <div className="formDisplay">
                    <label>
                        Nome do produto:

                        <input
                            type='text'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)} />

                    </label>
                    <label>
                        Código do produto:

                        <input
                            type='number'
                            value={productCode}
                            onChange={(e) => setProductCode(e.target.value)} />

                    </label>
                    <label>
                        Preço:

                        <input
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)} />
                    </label>
                </div>

                <label>
                    Descrição:

                    <textarea
                        id="textareaDescriptionRegisterProduct"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)} />
                </label>

                <button className="buttonPrimary" type="submit">
                    <img src="../../public/save.svg" alt="Save" />
                    Salvar
                </button>
            </form>
        </div>
    )
}