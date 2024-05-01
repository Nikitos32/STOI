import {Button} from "../UI/Button/Button";
import classes from './mainOfferCard.module.css'
import {CardProps} from "../../interfaces";

export const CardMainOffer = ({ text, picture }: CardProps) => {
    return (
        <div className={classes.card} style={{background: `url(/public/img/${picture}.jpg)`, backgroundSize: 'cover'}}>
            <div className={classes.wrapperContentCard}>
            <p className={classes.description}>{text}</p>
            <Button buttonContent='Подробнее'/>
            </div>
        </div>
    )
}
