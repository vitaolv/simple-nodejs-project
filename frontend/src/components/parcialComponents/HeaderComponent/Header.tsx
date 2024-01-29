import '../HeaderComponent/styles/header.sass'

export function HeaderComponent() {
    const logoUrl = `${process.env.VITE_API_URL}/public/logo.svg`;

    return (
        <div className='header'>
            <img src={logoUrl} alt="logo" />
            <nav>
                <ul id="navList">
                    <li><a href="/home">Início</a></li>
                    <li><div id='traçado' /></li>
                    <li><a href="/cadastro-de-produto">Cadastrar o produto</a></li>
                </ul>
            </nav>
        </div>
    )
}