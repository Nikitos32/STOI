import classes from "./bucketPage.module.css"
import {OrdersBoard} from "../OrdersBoard/OrdersBoard";

export const BucketPage = () => {
    return (
        <div className={classes.bucketWrapper}>
            <OrdersBoard/>
            <p className={classes.totalPrice}>Total: 3100 BYN</p>
        </div>
    )
}
