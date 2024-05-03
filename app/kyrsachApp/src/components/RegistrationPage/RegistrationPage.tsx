import {FC, useState} from "react";
import {RegistrationCard} from "../RegistrationCard/RegistrationCard";
import {AccountPage} from "../AccountPage/AccountPage";

export const RegistrationPage: FC = () => {
    const [userLogIn, setUser] = useState<boolean>(sessionStorage.length === 1);

    const handleReg = () => {
        setUser(true);
    }

    const Leave = () => {
        setUser(false);
        sessionStorage.clear();
    }

    return (
        <>
            {userLogIn ?
                <AccountPage leave={Leave} user={JSON.parse(sessionStorage.getItem('user'))} /> :
                <RegistrationCard handle={handleReg}/>}
        </>
    )
}
