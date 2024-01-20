import { ProductsListComponent } from "../../components/ProductListComponent/ProductsListComponent"
import "../HomePage/styles/productsList.sass"

export function Home() {
    return (
        <div className="productList">
            <h3>Lista dos produtos cadastrados</h3>
            <ProductsListComponent />
        </div >
    )
}