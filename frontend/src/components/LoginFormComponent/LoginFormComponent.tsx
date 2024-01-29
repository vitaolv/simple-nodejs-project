import "./styles/LoginFormStyle.sass"

export function LoginFormComponent() {
    return (
        <form className="form-login">
            <div className="display-form">
                <img src="/user.svg" alt="user-login" />
                <label>
                    Nome de usuário
                    <input type='text' />
                </label>
                <label>
                    Senha
                    <input type='password' />
                </label>
            </div>
            <button className='buttonPrimary' type='submit'>
                <img className="enter-img" src="/enter.svg" alt="enter-login" />
                Entrar
            </button>
        </form>
    )
}