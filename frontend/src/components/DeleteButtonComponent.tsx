import { useState } from "react";
import axios from "axios";

interface TypesDeleteButtonComponent {
    readonly productId: string;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}


export function DeleteButtonComponent({ text, classStyle, srcImage, productId }: TypesDeleteButtonComponent) {
    const [isLoading, setIsLoading] = useState(false)

    const handleDeleteButtonClick = async () => {
        setIsLoading(true)

        try {
            const response = await axios.delete(`http://localhost:8000/api/products/${productId}`, {
                method: 'DELETE'
            })

            if (response.status === 204) {
                window.location.reload();
                alert('Success!');
            }
            setIsLoading(false);

        } catch (err: unknown) {
            alert(err)
        }

    }
    return (
        <button
            className={`${classStyle} `}
            disabled={isLoading}
            onClick={handleDeleteButtonClick}
        >
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )
}