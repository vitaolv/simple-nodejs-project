interface TypesButtonComponent {
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}

export function SeeDetailButtonComponent({ text, classStyle, srcImage }: TypesButtonComponent) {
    return (
        <button className={`${classStyle}`}>
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )
}