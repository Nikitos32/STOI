import classes from "./piece.module.css"
import {Order} from "../../interfaces";

export const Piece = ({ id, descr, price }:Order) => {
    return (
        <div className={classes.pieceWrapper}>
            <p className={classes.orderNumber}>{id}</p>
            <p className={classes.shortDescr}>{descr}</p>
            <p className={classes.price}>{price}</p>
        </div>
    )
}
