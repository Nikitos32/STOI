import {FC, useState} from "react";
import classes from "./registrationPage.module.css"
import {RegistrationCard} from "../RegistrationCard/RegistrationCard";
import {AccountPage} from "../AccountPage/AccountPage";

export const RegistrationPage: FC = () => {
    const [userLogIn, setUser] = useState<boolean>(false);

    if (localStorage.getItem('userReg')) {
        setUser(true);
    }

    return (
        <>
            {userLogIn ? <AccountPage/> : <RegistrationCard/>}
        </>
    )
}
