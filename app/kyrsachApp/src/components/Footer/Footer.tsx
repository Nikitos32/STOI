import classes from './footer.module.css'
import {Button} from "../UI/Button/Button";

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerWrapper}>
                <div className={classes.footerText}><i className="fa-regular fa-copyright"></i> 2024 Expert Cleaning</div>
                <div className={classes.logoWrapper}>
                    <img width='50px' height='50px' src="/public/png/bigLogo.png" alt="logo"/>
                    <p>EN RU</p>
                </div>
                <div className={classes.socialWrapper}>
                    <Button buttonContent={<i className="fa-brands fa-facebook fa-xl"></i>}/>
                    <Button buttonContent={<i className="fa-brands fa-twitter fa-xl"></i>}/>
                    <Button buttonContent={<i className="fa-brands fa-instagram fa-xl"></i>}/>
                    <Button buttonContent={<i className="fa-brands fa-telegram fa-xl"></i>}/>
                </div>
            </div>
        </div>
    )
}
