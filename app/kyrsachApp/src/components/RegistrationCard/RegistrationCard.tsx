import classes from './registrationCard.module.css';
import {RegistrationForm} from "../RegistrationForm/RegistrationForm";

interface RegCardProps {
    handle: () => void;
}

export const RegistrationCard = ({ handle }: RegCardProps ) => {
    return (
        <div className={classes.registrationWrapper}>
            <div className={classes.registrationCard}>
                <p className={classes.labelRegistration}>Registration Page</p>
                <RegistrationForm handleFunc={handle}/>
            </div>
        </div>
    )
}
