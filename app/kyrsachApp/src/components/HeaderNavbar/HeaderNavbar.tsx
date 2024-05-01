import classes from "./headerNavbar.module.css";

export const HeaderNavbar = () => {
    return (
        <div className={classes.headerNavbar}>
            <p><a href="#">О нас</a></p>
            <p><a href="#">Каталог</a></p>
            <p><a href="#">Корзина</a></p>
            <p><a href="#">Аккаунт</a></p>
        </div>
    )
}
