import { LoadingComponent } from "../LoadingComponent/LoadingComponent"
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import "./styles/noData.sass"

export function NoDataImg() {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    return (
        <div className="NoData">
            <LoadingComponent text="Atualizando os dados..." isLoading={isLoading} />

            <img src="/noData.svg" alt="Sem-dados" />
            <h4>Opa! Não temos produtos cadastrados.</h4>
            <p>
                Sem problemas,
                você pode <a href="/cadastro-de-produto">clicar aqui</a> para
                adicionar um novo produto.
            </p>
        </div>
    )
}