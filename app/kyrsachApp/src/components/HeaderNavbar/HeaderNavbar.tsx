import classes from "./headerNavbar.module.css";
import {NavLink} from "react-router-dom";

export const HeaderNavbar = () => {
    return (
        <div className={classes.headerNavbar}>
            <p><NavLink to="/">Главная</NavLink></p>
            <p><NavLink to="/catalog">Каталог</NavLink></p>
            <p><NavLink to="/bucket">Корзина</NavLink></p>
            <p><NavLink to="/account">Аккаунт</NavLink></p>
        </div>
    )
}
