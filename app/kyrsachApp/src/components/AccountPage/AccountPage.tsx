import classes from './accountPage.module.css'
import {AccountCard} from "../AccountCard/AccountCard";
import {User} from "../../interfaces";

interface AccountPageProps {
    user: User,
}

export const AccountPage = ({ user }: AccountPageProps) => {
    return (
        <div className={classes.accountPageWrapper}>
            <div className={classes.accountPage}>
                <AccountCard user={user}/>
                <div className={classes.boardsWrapper}>
                    <div className={classes.requestsBoard}></div>
                    <div className={classes.ordersBoard}></div>
                </div>
            </div>
        </div>
    )
}
