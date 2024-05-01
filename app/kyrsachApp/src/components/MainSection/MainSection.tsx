import classes from './mainSection.module.css'
import {Advertisement} from "../Advertisement/Advertisement";
import {MainOffersSection} from "../MainOffers/MainOffersSection";

export const MainSection = () => {
  return (
      <div className={classes.mainSectionWrapper}>
          <Advertisement />
          <MainOffersSection />
      </div>
  )
}
