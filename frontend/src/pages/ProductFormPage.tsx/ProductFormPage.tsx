import { PostFormComponent } from "../../components/PostFormComponent/PostFormComponent";
import './styles/ProductFormPage.sass'

export function ProductFormPage() {
    return (
        <div id="formBody">
            <h3 className="titleSectoinProductsList">Cadastro de produtos</h3>
            <PostFormComponent />
        </div>
    )
}