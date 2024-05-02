import classes from "./searchForm.module.css";
import {SearchInput} from "../UI/SearchInput/SearchInput";
import {Button} from "../UI/Button/Button";

export const SearchForm = () => {
    return (
        <form className={classes.searchSection}>
            <SearchInput type='search' placeholder='Search...'/>
            <Button buttonContent={<i className="fa-solid fa-magnifying-glass"></i>}/>
        </form>
    )
}
