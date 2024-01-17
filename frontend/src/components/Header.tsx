import '../styles/header.sass'

export function HeaderComponent() {
    return (
        <div className='header'>
            <img src="../../public/logo.svg" alt="logo" />
            <nav>
                <ul id="navList">
                    <li><a href="/home">Início</a></li>
                    <li><div id='traçado' /></li>
                    <li><a href="/cadastro-de-produto">Registrar o produto</a></li>
                </ul>
            </nav>
        </div>
    )
}