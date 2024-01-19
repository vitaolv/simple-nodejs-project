import axios from "axios"
import { useState } from "react"




export function SaveUptadeButtonComponent({ text, classStyle, srcImage, product }: TypesSaveButtonComponent) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleFormSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setIsLoading(true)

        try {
            const response = await axios.put("http://localhost:8000/api/products", {
                productCode: product.productCode,
                productName: product.productName,
                productDescription: product.productDescription,
                productPrice: product.productPrice
            });
            console.log(response)
            if (response.status === 200) {
                window.location.reload();
                alert('Success!');
            }
        } catch (error: unknown) {
            alert(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button
            className={`${classStyle} `}
            disabled={isLoading}
            onClick={() => handleFormSubmit}
        >
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )
}