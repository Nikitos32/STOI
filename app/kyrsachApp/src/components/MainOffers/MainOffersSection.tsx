import {CardMainOffer} from "../MainOfferCard/CardMainOffer";
import classes from './mainOffersSection.module.css'

export const MainOffersSection = () => {
    return (
        <>
            <p className={classes.offerSectionTitle}>Наши самые лучшие скидки</p>
            <div className={classes.cardSection}>
                <CardMainOffer picture='1offer' text='Глубокая чистка жилых помещений'/>
                <CardMainOffer picture='2offer' text='Офисная уборка'/>
                <CardMainOffer picture='3offer' text='Послестроительная уборка'/>
            </div>
        </>
    )
}
