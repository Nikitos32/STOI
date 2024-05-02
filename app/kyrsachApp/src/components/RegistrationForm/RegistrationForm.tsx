import {FC} from "react";
import classes from './registrationForm.module.css';
import {FormInput} from "../UI/FormInput/FormInput";

export const RegistrationForm: FC = () => {
    return (
        <form action="" className={classes.registrationForm}>
            <FormInput type='text' placeholder='username'/>
            <FormInput type='password' placeholder='password'/>
            <div className={classes.checkbox}>
                <input id='terms' type="checkbox"/>
                <label htmlFor="terms">Согласен на обработку данных</label>
            </div>
            <button className={classes.btnEnter}>Log in</button>
        </form>
    )
}
