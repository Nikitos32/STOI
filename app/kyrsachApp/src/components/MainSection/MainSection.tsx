import classes from './mainSection.module.css'
import {Advertisement} from "../Advertisement/Advertisement";
import {MainOffersSection} from "../MainOffers/MainOffersSection";
import {MapSection} from "../MapSection/MapSection";
import {RequestSection} from "../RequestSection/RequestSection";

export const MainSection = () => {
  return (
      <div className={classes.mainSectionWrapper}>
          <Advertisement />
          <MainOffersSection />
          <MapSection />
          <RequestSection />
      </div>
  )
}
