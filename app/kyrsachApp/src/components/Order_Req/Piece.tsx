import classes from "./piece.module.css"

interface PieceProps {
    id: number,
    descr: string,
    price: string
}

export const Piece = ({ id, descr, price }:PieceProps) => {
    return (
        <div className={classes.pieceWrapper}>
            <p className={classes.orderNumber}>{id}</p>
            <p className={classes.shortDescr}>{descr}</p>
            <p className={classes.price}>{price}</p>
        </div>
    )
}
