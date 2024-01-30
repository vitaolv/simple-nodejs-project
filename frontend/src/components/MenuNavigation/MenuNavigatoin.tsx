export function MenuNavigation() {
    return (
        <nav className='nav-content'>
            <ul className="navList">
                <li><a href="/home">Início</a></li>
                <li><div id='traçado' /></li>
                <li><a href="/cadastro-de-produto">Cadastrar o produto</a></li>
            </ul>
            <ul className="navList">
                <li>
                    <a className="button-to-login" href="/login">
                        <img src="/user.svg" alt="login" />
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    )
}