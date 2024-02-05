import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import "../../pages/HomePage/styles/productsList.sass"

import { DeleteButtonComponent } from "../DeleteButtonComponent/DeleteButtonComponent";
import { UpdateButtonComponent } from "../UpdateComponents/UpdateButtonComponent/UpdateButtonComponent";
import { SeeDetailButtonComponent } from "../SeeDetailButtonComponent/SeeDetailButtonComponent";
import { isLoadingAction } from "../../store/actions/isLoadingAction";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";
import { NoDataImg } from "../NoDataImgComponent.tsx/NoDataImgComponent";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { RootState } from "../../store";

import { Product } from "../../utils/InterfaceProduct";

export function ProductsListComponent() {
    const [products, setProducts] = useState<Product[]>([]);
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(isLoadingAction(true));
        setTimeout(() => {
            async function getProducts() {
                try {
                    const response = await axios.get('https://cadastro-dos-produtos.onrender.com/api/products');

                    if (response.status === 200) {
                        setProducts(response.data)
                    }

                } catch (error: unknown) {
                    alert(error)
                } finally {
                    dispatch(isLoadingAction(false))
                }
            }
            getProducts()
            dispatch(isLoadingAction(false));
        }, 1500);
    }, [])

    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(search.toLowerCase()) ||
        product.productCode.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (searchValue: string) => {
        setSearch(searchValue);
    }


    return (
        <div>

            <SearchComponent onSearch={handleSearch} />
            <ul className="ul-productList">
                <LoadingComponent text="Atualizando os dados..." isLoading={isLoading} />

                {filteredProducts.length > 0 ? (filteredProducts.map((product) => (
                    <li key={product.id}>
                        <span>
                            <p className="li-header">Código:</p>
                            <p className="li-item">{product.productCode}
                            </p>
                        </span>
                        <span>
                            <p className="li-header">Nome:</p>
                            <p className="li-item">{product.productName}</p>
                        </span>
                        <span>
                            <p className="li-header">Preço:</p>
                            <p className="li-item">{product.productPrice}</p>
                        </span>
                        <span>
                            <SeeDetailButtonComponent text="Ver descrição" classStyle="secondaryButton" srcImage="/see.svg" product={product} />
                        </span>
                        <div className="displayButtons">
                            <span>
                                <UpdateButtonComponent text="Editar" classStyle="secondaryButton" srcImage="/edit.svg" product={product} />
                            </span>
                            <span>
                                <DeleteButtonComponent text="Deletar" classStyle="deleteButton" srcImage=" /trash.svg" product={product} />
                            </span>
                        </div>
                    </li>
                ))) : (
                    <NoDataImg />
                )}
            </ul>
        </div>
    )
}