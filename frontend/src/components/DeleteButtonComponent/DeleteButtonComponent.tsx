import { useDispatch } from "react-redux";
import { modalConfirmIsOpenAction } from "../../store/actions/modalConfirmAction";

interface TypesDeleteButtonComponent {
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}


export function DeleteButtonComponent({ text, classStyle, srcImage }: TypesDeleteButtonComponent) {
    const dispatch = useDispatch();

    const handleDeleteButtonClick = () => {
        dispatch(modalConfirmIsOpenAction());
    };


    return (
        <button
            className={`${classStyle} `}
            onClick={handleDeleteButtonClick}
        >
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )
}