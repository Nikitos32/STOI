import {GeneralPage} from "../GeneralPage/GeneralPage";
import {AfterBuildingPage} from "../AfterBuildingPage/AfterBuildingPage";
import {CarpetPage} from "../CarpetPage/CarpetPage";
import {CleaningPage} from "../CleaningPage/CleaningPage";
import {DeepPage} from "../DeepPage/DeepPage";

export const CatalogList = () => {
    return (
        <>
            <GeneralPage/>
            <AfterBuildingPage/>
            <CarpetPage/>
            <CleaningPage/>
            <DeepPage/>
        </>
    )
}
