import {Header} from "./components/Header/Header";
import classes from "./index.module.css";
import {MainSection} from "./components/MainSection/MainSection";

export default function App() {
    return (
        <div className={classes.mainWrapper}>
            <Header/>
            <MainSection />
        </div>
    )
}
