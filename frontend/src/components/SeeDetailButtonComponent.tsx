import axios from "axios";
import { useNavigate } from "react-router-dom";
interface TypesButtonComponent {
    readonly productId: string;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}


export function SeeDetailButtonComponent({ text, classStyle, srcImage, productId }: TypesButtonComponent) {
    const navigate = useNavigate();
    const handleSeeDetailButtonClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${productId}`,
                {
                    method: 'GET'
                }
            )

            if (response.status === 200) {
                navigate(`/descrição-de-produto/${productId}`, { state: { productId } });
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