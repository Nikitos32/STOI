import classes from './accountPage.module.css'
import {AccountCard} from "../AccountCard/AccountCard";
import {User} from "../../interfaces";
import {RequestBoard} from "../RequestBoard/RequestBoard";
import {OrdersBoard} from "../OrdersBoard/OrdersBoard";

interface AccountPageProps {
    user: User,
    leave: () => void;
}

export const AccountPage = ({ user, leave }: AccountPageProps) => {
    return (
        <div className={classes.accountPageWrapper}>
            <div className={classes.accountPage}>
                <AccountCard leave={leave} user={user}/>
                <div className={classes.boardsWrapper}>
                    <RequestBoard />
                    <OrdersBoard />
                </div>
            </div>
        </div>
    )
}
