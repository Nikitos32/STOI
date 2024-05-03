import classes from './catalogCard.module.css'
import {Button} from "../UI/Button/Button";

interface CatalogCardProps {
    id: number,
    descr: string,
    price: string,
    img: string
}

export const CatalogCard = ({id, descr, price, img}: CatalogCardProps) => {
    return (
        <div className={classes.catalogCardWrapper}>
            <img className={classes.imgCard} src={`/public/img/${img}.jpg`} alt="offer"/>
            <div className={classes.infoCardWrapper}>
                <p className={classes.cardNumber}>#{id}</p>
                <p className={classes.cardDescr}>{descr}</p>
                <p className={classes.cardPrice}><Button buttonContent="Добавить"/> Total: {price} BYN</p>
            </div>
        </div>
    )
}
