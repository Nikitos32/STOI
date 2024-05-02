import {CardMainOffer} from "../MainOfferCard/CardMainOffer";
import classes from './mainOffersSection.module.css'

export const MainOffersSection = () => {
    return (
        <>
            <p className={classes.offerSectionTitle}>Наши самые лучшие скидки</p>
            <div className={classes.cardSection}>
                <CardMainOffer picture='1offer' mainPrice={99} secondaryPrice={48} text='Глубокая чистка жилых помещений'/>
                <CardMainOffer picture='2offer' mainPrice={89} secondaryPrice={32} text='Офисная уборка'/>
                <CardMainOffer picture='3offer' mainPrice={65} secondaryPrice={30} text='Послестроительная уборка'/>
            </div>
        </>
    )
}
