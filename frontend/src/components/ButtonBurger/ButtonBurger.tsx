import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './styles/buttonBurger.sass'

import { RootState } from "../../store";
import { burgerIsOpenAction } from "../../store/actions/burgerIsOpenAction";
import { MenuNavigation } from "../MenuNavigation/MenuNavigatoin";

export function ButtonBurger() {
    const isOpen = useSelector((state: RootState) => state.menuBurger.burgerIsOpen);
    const dispatch = useDispatch();

    const handleBurgerClick = () => {
        const action = isOpen ? burgerIsOpenAction(false) : burgerIsOpenAction(true);
        dispatch(action)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 548 && isOpen) {
                dispatch(burgerIsOpenAction(false));
                document.body.classList.remove('menu-open');
            } else if (window.innerWidth <= 548 && isOpen) {
                dispatch(burgerIsOpenAction(false));
                document.body.classList.remove('menu-open');
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [dispatch, isOpen])

    return (
        <>
            <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
                {isOpen && <MenuNavigation />}
            </div>
            <button className="button-burger" onClick={handleBurgerClick}>
                {isOpen ? 'X' : '☰'}
            </button>
        </>
    )
}