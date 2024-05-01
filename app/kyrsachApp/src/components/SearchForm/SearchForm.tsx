import classes from "./searchForm.module.css";
import {Input} from "../UI/Input/Input";
import {Button} from "../UI/Button/Button";

export const SearchForm = () => {
    return (
        <form className={classes.searchSection}>
            <Input type='search' placeholder='Search...'/>
            <Button buttonContent={<i className="fa-solid fa-magnifying-glass"></i>}/>
        </form>
    )
}
