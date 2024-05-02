import classes from "./header.module.css"
import {HeaderNavbar} from "../HeaderNavbar/HeaderNavbar";
import {SearchForm} from "../SearchForm/SearchForm";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.header}>
                <NavLink to='/'><img src="/public/png/bigLogo.png" width='50' height='50' alt="logo"/></NavLink>
                <HeaderNavbar/>
                <SearchForm />
            </div>
        </div>
    )
}
