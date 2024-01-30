import '../HeaderComponent/styles/header.sass'

import { MenuNavigation } from '../../MenuNavigation/MenuNavigatoin';
import { ButtonBurger } from '../../ButtonBurger/ButtonBurger';

import { useState, useEffect } from 'react';

export function HeaderComponent() {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
        setWindowWidth(window.innerWidth);
    }, []);

    return (
        <div className='header'>
            <img src="/logo.svg" alt="logo" />
            {windowWidth <= 548 ? <ButtonBurger /> : <MenuNavigation />}
        </div>
    )
}