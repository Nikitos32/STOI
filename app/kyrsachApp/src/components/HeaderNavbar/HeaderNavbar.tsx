import classes from "./headerNavbar.module.css";
import {Link, NavLink} from "react-router-dom";

export const HeaderNavbar = () => {
    return (
        <div className={classes.headerNavbar}>
            <p><Link to="/">Главная</Link></p>
            <p><Link to="/catalog">Каталог</Link></p>
            <p><Link to="/bucket">Корзина</Link></p>
            <p><Link to="/account">Аккаунт</Link></p>
        </div>
    )
}
