import classes from './registrationCard.module.css';
import {RegistrationForm} from "../RegistrationForm/RegistrationForm";

export const RegistrationCard = () => {
    return (
        <div className={classes.registrationWrapper}>
            <div className={classes.registrationCard}>
                <p className={classes.labelRegistration}>Registration Page</p>
                <RegistrationForm/>
            </div>
        </div>
    )
}
