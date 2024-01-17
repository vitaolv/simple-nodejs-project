import axios from "axios";
interface TypesButtonComponent {
    readonly productId: string;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}


export function SeeDetailButtonComponent({ text, classStyle, srcImage, productId }: TypesButtonComponent) {

    const handleSeeDetailButtonClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${productId}`,
                {
                    method: 'GET'
                }
            )

            if (response.status === 200) {
                alert("Certo!" + productId)
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