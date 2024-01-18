
interface TypesToBackButtonComponent {
    readonly productId: string;
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}

export function ToBackButtonComponent({ text, classStyle, srcImage }: TypesToBackButtonComponent) {

    const handleToBackButtonClick = () => {

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