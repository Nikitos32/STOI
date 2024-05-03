import {FC, useState} from "react";
import {RegistrationCard} from "../RegistrationCard/RegistrationCard";
import {AccountPage} from "../AccountPage/AccountPage";

export const RegistrationPage: FC = () => {
    const [userLogIn, setUser] = useState<boolean>(false);

    const handleReg = () => {
        setUser(true);
    }

    return (
        <>
            {userLogIn || sessionStorage.getItem('user') ?
                <AccountPage user={JSON.parse(sessionStorage.getItem('user'))} /> : <RegistrationCard handle={handleReg}/>}
        </>
    )
}
