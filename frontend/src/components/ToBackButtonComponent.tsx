import { useNavigate } from "react-router-dom";
interface TypesToBackButtonComponent {
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}

export function ToBackButtonComponent({ text, classStyle, srcImage }: TypesToBackButtonComponent) {
    const navigate = useNavigate()

    const handleToBackButtonClick = () => {
        navigate("/home")
    }

    return (
        <button
            className={`${classStyle}`}
            onClick={handleToBackButtonClick}
        >
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )

}