import classes from './formInput.module.css'
import {InputProps} from "../../../interfaces";

export const FormInput = ({type, placeholder, handle, value}: InputProps) => {
    return (
        <input value={value} type={type} placeholder={placeholder} onChange={(event) => handle ? handle(event) : ''} className={classes.formInput} required={true}/>
    )
}
