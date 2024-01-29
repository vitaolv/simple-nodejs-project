import { LoginFormComponent } from "../../components/LoginFormComponent/LoginFormComponent";

import "./styles/LoginPageStyles.sass"

export function LoginPage() {
    return (
        <div className="content-login-page">
            <h3 className="text-heading3-login">Entrar na sua conta</h3>
            <h4 className="text-heading4-login">Faça login para acessar e gerenciar seus produtos</h4>
            <div className="card-login">
                <LoginFormComponent />
            </div>
        </div>
    )
}