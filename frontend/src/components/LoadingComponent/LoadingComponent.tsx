
import "./styles/loading.sass"

interface TypesLoadingComponent {
    readonly text: string;

    isLoading: boolean;

}

export function LoadingComponent({ text, isLoading }: TypesLoadingComponent) {



    return (
        <div className="loading">
            {isLoading && (
                <div className="overlay">
                    <div className="spinner" />
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}
