import { useState } from "react";
import axios from "axios";

interface TypesUpdateButtonComponent {
    readonly productId: string;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}


export function UpdateButtonComponent({ text, classStyle, srcImage, productId }: TypesUpdateButtonComponent) {
    const [isLoading, setIsLoading] = useState(false)

    const handleDeleteButtonClick = async () => {
        setIsLoading(true)

        try {
            const response = await axios.delete(`http://localhost:8000/api/products/${productId}`, {
                method: 'UPDATE',
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