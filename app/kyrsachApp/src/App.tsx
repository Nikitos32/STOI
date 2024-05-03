import {MainPage} from "./components/MainPage/MainPage";
import classes from "./components/MainPage/mainPage.module.css";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {CatalogPage} from "./components/CatalogPage/CatalogPage";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {RegistrationPage} from "./components/RegistrationPage/RegistrationPage";
import {BucketPage} from "./components/BucketPage/BucketPage";
import {Map} from "./components/Map/Map";

export default function App() {
    return (
        <BrowserRouter>
            <div className={classes.mainWrapper}>
                <Header/>
                <Routes>
                    <Route element={<MainPage/>} path='/'/>
                    <Route element={<CatalogPage/>} path='/catalog/*'/>
                    <Route element={<BucketPage/>} path='/bucket'/>
                    <Route element={<RegistrationPage/>} path='/account'/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
