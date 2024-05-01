import {InputProps} from "../../../interfaces";
import classes from "./input.module.css";

export const Input = ({ type, placeholder}: InputProps) => {
    return (
        <>
            <input
                type={type}
                className={classes.input}
                placeholder={placeholder}
            />
        </>
    )
}
