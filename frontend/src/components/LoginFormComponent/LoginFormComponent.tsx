import "./styles/LoginFormStyle.sass"

export function LoginFormComponent() {
    return (
        <form className="form-login">
            <div className="display-form">
                <img src="/user.svg" alt="user-login" />
                <label>
                    Nome de usuário
                    <input
                        type='text'
                        placeholder="Escolha um nome de usuário"
                        maxLength={20}
                        minLength={3}
                    />
                </label>
                <label>
                    Senha
                    <input
                        type='password'
                        placeholder="Escolha uma senha"
                        minLength={6}
                    />
                </label>
            </div>
            <button className='buttonPrimary' type='submit'>
                <img className="enter-img" src="/enter.svg" alt="enter-login" />
                Entrar
            </button>
        </form>
    )
}