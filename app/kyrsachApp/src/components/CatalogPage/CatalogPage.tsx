import classes from './catalogPage.module.css'
import {Link} from "react-router-dom";
import {BucketPage} from "../BucketPage/BucketPage";
import {Map} from "../Map/Map";
import {Route, Routes} from "react-router";
import {GeneralPage} from "../GeneralPage/GeneralPage";
import {DeepPage} from "../DeepPage/DeepPage";
import {AfterBuildingPage} from "../AfterBuildingPage/AfterBuildingPage";
import {CarpetPage} from "../CarpetPage/CarpetPage";
import {CleaningPage} from "../CleaningPage/CleaningPage";
import {CatalogList} from "../CatalogList/CatalogList";

export const CatalogPage = () => {
    return (
        <div className={classes.catalogWrapper}>
            <nav className={classes.catalogNavWrapper}>
                <p className={classes.titleNavBar}>Категории</p>
                <div className={classes.catalogNav}>
                    <Link to=''>
                        <div className={classes.navInput}>Все виды</div>
                    </Link>
                    <Link to='general'>
                        <div className={classes.navInput}>Общая уборка</div>
                    </Link>
                    <Link to='deep'>
                        <div className={classes.navInput}>Глубокая уборка</div>
                    </Link>
                    <Link to='afterBuilding'>
                        <div className={classes.navInput}>Уборка после строительства/ремонта</div>
                    </Link>
                    <Link to='carpet'>
                        <div className={classes.navInput}>Химчистка и уход за мебелью и коврами</div>
                    </Link>
                    <Link to='cleaning'>
                        <div className={classes.navInput}>Уборка общественных мест</div>
                    </Link>
                </div>
            </nav>
            <section className={classes.catalog}>
                <Routes>
                    <Route path="/" element={<CatalogList/>}/>
                    <Route path="general" element={<GeneralPage/>}/>
                    <Route path="deep" element={<DeepPage/>}/>
                    <Route path="afterBuilding" element={<AfterBuildingPage/>}/>
                    <Route path="carpet" element={<CarpetPage/>}/>
                    <Route path="cleaning" element={<CleaningPage/>}/>
                </Routes>
            </section>
        </div>
    )
}
