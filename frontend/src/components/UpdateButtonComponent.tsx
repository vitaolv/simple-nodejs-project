
import { useNavigate } from "react-router-dom";
import { Product } from "../pages/UpdatePage/UpdateProductPage";

interface TypesUpdateButtonComponent {
    readonly product: Product;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}

export function UpdateButtonComponent({ text, classStyle, srcImage, product }: TypesUpdateButtonComponent) {
    const navigate = useNavigate()

    const handleUpdateButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate(`/editar-o-produto/${product.productName}`, { state: { product } })
    }

    return (
        <button
            className={`${classStyle} `}
            onClick={handleUpdateButtonClick}
        >
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )
}