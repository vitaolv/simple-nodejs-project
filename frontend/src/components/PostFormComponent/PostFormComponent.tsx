import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../components/PostFormComponent/styles/form.sass'

import { formatPrice } from "../../utils/formValidation/validationPriceInput";
import { limitLengthCode } from "../../utils/formValidation/validationCodeInput";

export function PostFormComponent() {
    const [productCode, setProductCode] = useState<string>('');
    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [productPrice, setProductPrice] = useState<string>('');
    const navigate = useNavigate();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await axios.post("https://cadastro-dos-produtos.onrender.com/api/products", {
                productCode,
                productName,
                productDescription,
                productPrice
            });
            if (response.status === 200) {
                navigate("/home")
            }
        } catch (error: unknown) {
            alert(error);
        }
    }
    return (
        <form className="formSection" onSubmit={handleFormSubmit}>
            <div className="formDisplay">
                <label>
                    Nome do produto:

                    <input
                        type='text'
                        value={productName}
                        maxLength={90}
                        onChange={(e) => setProductName(e.target.value)} />

                </label>
                <label>
                    Código do produto:

                    <input
                        type='number'
                        value={productCode}
                        onChange={(e) => {
                            const limitedCode = limitLengthCode(e.target.value);
                            setProductCode(limitedCode);
                        }} />

                </label>
                <label>
                    Preço:
                    <input
                        value={productPrice}
                        onChange={(e) => {
                            const formattedValue = formatPrice(e.target.value);
                            setProductPrice(formattedValue);
                        }}
                    />
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
                <img src="/save.svg" alt="Save" />
                Salvar
            </button>
        </form>
    )
}