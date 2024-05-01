import classes from "./header.module.css"
import {HeaderNavbar} from "../HeaderNavbar/HeaderNavbar";
import {SearchForm} from "../SearchForm/SearchForm";

export const Header = () => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.header}>
                <a href="#"><img src="/public/png/bigLogo.png" width='50' height='50' alt="logo"/></a>
                <HeaderNavbar/>
                <SearchForm />
            </div>
        </div>
    )
}
