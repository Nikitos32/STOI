import classes from './accountCard.module.css'
import {User} from "../../interfaces";
import React, {Ref, useState} from "react";

interface AccountCardProps {
    user: User
}

export const AccountCard = ({ user }: AccountCardProps) => {
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [passwordVisible, setPasswordVisibility] = useState<boolean>(false);
    const [emailVisible, setEmailVisibility] = useState<boolean>(false);

    const handlePassword = () => {
        if (passwordVisible) {
            setPasswordVisibility(false);
            const userEdited: User = {
                username: user.username,
                password,
                email: user.email,
                role: 1
            }
            sessionStorage.setItem('user', JSON.stringify(userEdited))
            setPassword('');
        } else {
            setPasswordVisibility(true);
            setPassword((JSON.parse(sessionStorage.getItem('user')) as User).password);
        }
    }

    const handleEmail = () => {
        if (emailVisible) {
            setEmailVisibility(false);
            const userEdited: User = {
                username: user.username,
                password: user.password,
                email,
                role: 1
            }
            sessionStorage.setItem('user', JSON.stringify(userEdited))
            setEmail('');
        } else {
            setEmailVisibility(true);
            setEmail((JSON.parse(sessionStorage.getItem('user')) as User).email);
        }
    }

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setPassword(target.value);
    }

    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setEmail(target.value);
    }

    return (
        <div className={classes.accountCardWrapper}>
            <div className={classes.accountImageWrapper}></div>
            <div className={classes.accountInfoWrapper}>
                <p className={classes.usernameWrapper}>{user.username}</p>
                <div className={classes.userInfo}>
                    <div className={classes.inputAccountWrapper}>
                        <label htmlFor="accountEmail">Email:</label>
                        <input
                            disabled={!emailVisible}
                            className={classes.editInput}
                            type='text' id='accountEmail'
                            value={email}
                            onChange={(event) => handleInputEmail(event)}
                        />
                        <button onClick={() => handleEmail()} className={classes.editBtn}>Edit</button>
                    </div>
                    <div className={classes.inputAccountWrapper}>
                        <label htmlFor="accountPassword">Password:</label>
                        <input
                            disabled={!passwordVisible}
                            className={classes.editInput}
                            type='text' id='accountPassword'
                            value={password}
                            onChange={(event) => handleInputPassword(event)}
                        />
                        <button onClick={() => handlePassword()} className={classes.editBtn}>Edit</button>
                    </div>
                </div>
                <div className={classes.btnWrapper}>
                    <button className={classes.leaveBtn}>Leave</button>
                </div>
            </div>
        </div>
    )
}
