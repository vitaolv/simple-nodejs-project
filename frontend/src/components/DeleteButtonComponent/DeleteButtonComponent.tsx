import { useDispatch } from "react-redux";
import { modalConfirmIsOpenAction } from "../../store/actions/modalConfirmAction";
import { setProductBeingDeleted } from "../../store/reducers/productToDeleteReducer";
import { Product } from "../../utils/InterfaceProduct";

interface TypesDeleteButtonComponent {
    readonly product: Product;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}


export function DeleteButtonComponent({ text, classStyle, srcImage, product }: TypesDeleteButtonComponent) {
    const dispatch = useDispatch();

    const handleDeleteButtonClick = () => {
        dispatch(setProductBeingDeleted(product));
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