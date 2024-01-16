interface TypesButtonComponent {
    readonly text: string;
    readonly classStyle: string;
    readonly srcImage: string;
}

export function ButtonComponent({ text, classStyle, srcImage }: TypesButtonComponent) {
    return (
        <button className={`${classStyle}`}>
            <img src={srcImage} alt={text} />
            {text}
        </button>
    )
}