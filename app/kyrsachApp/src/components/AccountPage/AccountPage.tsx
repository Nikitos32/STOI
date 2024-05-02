import classes from './accountPage.module.css'
import {AccountCard} from "../AccountCard/AccountCard";

export const AccountPage = () => {
    return (
        <div className={classes.accountPageWrapper}>
            <div className={classes.accountPage}>
                <AccountCard/>
                <div className={classes.boardsWrapper}>
                    <div className={classes.requestsBoard}></div>
                    <div className={classes.ordersBoard}></div>
                </div>
            </div>
        </div>
    )
}
