import classes from "./headerNavbar.module.css";
import {NavLink} from "react-router-dom";

export const HeaderNavbar = () => {
    return (
        <div className={classes.headerNavbar}>
            <p><NavLink to="/">Главная</NavLink></p>
            <p><NavLink to="/catalog">Каталог</NavLink></p>
            <p><a href="/bucket">Корзина</a></p>
            <p><a href="/account">Аккаунт</a></p>
        </div>
    )
}
