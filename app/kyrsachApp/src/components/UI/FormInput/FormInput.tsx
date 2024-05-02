import classes from './formInput.module.css'
import {InputProps} from "../../../interfaces";

export const FormInput = ({type, placeholder}: InputProps) => {
    return (
        <input type={type} placeholder={placeholder} className={classes.formInput} required={true}/>
    )
}
