import React, {FC, useState} from "react";
import classes from './registrationForm.module.css';
import {FormInput} from "../UI/FormInput/FormInput";
import {User} from "../../interfaces";

interface RegFormProps {
    handleFunc: () => void;
}

export const RegistrationForm: FC = ({ handleFunc }: RegFormProps) => {
    const [username, setUserName] = useState<string>('');
    const [password, setUserPassword] = useState<string>('');
    const [email, setUserEmail] = useState<string>('');

    const handleInputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setUserName(target.value);
    }

    const handleInputUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setUserPassword(target.value);
    }

    const handleInputUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setUserEmail(target.value);
    }

    const sendHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const user: User = {
            username,
            password,
            email,
            role: 1,
        }
        if (password && username && email) {
            handleFunc();
            sessionStorage.setItem('user', JSON.stringify(user))
            setUserName('');
            setUserPassword('');
            setUserEmail('');
        }
    }

    return (
        <form className={classes.registrationForm}>
            <FormInput type='text' placeholder='username' handle={handleInputUserName} value={username}/>
            <FormInput type='password' placeholder='password' handle={handleInputUserPassword} value={password}/>
            <FormInput type='email' placeholder='email' handle={handleInputUserEmail} value={email}/>
            <div className={classes.checkbox}>
                <input id='terms' type="checkbox" required={true}/>
                <label htmlFor="terms">Согласен на обработку данных</label>
            </div>
            <button onClick={(event) => sendHandle(event)} className={classes.btnEnter}>Log in</button>
        </form>
    )
}
