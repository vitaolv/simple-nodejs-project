import axios from "axios";
import { useNavigate } from "react-router-dom";


interface Product {
    id: string,
    productCode: string,
    productName: string,
    productDescription: string,
    productPrice: string,
}

interface TypesButtonComponent {
    readonly product: Product;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}


export function SeeDetailButtonComponent({ text, classStyle, srcImage, product }: TypesButtonComponent) {
    const navigate = useNavigate();
    const handleSeeDetailButtonClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${product.id}`,
                {
                    method: 'GET'
                }
            )

            if (response.status === 200) {
                navigate(`/descrição-de-produto/${product.productName}`, { state: { product } });
            }
        } catch (err: unknown) {
            alert(err)
        }
    }
    return (
        <button
            className={`${classStyle}`}
            onClick={handleSeeDetailButtonClick}
        >
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )
}