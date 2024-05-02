import classes from './requestForm.module.css'
import {RequestForm} from "../RequestForm/RequestForm";

export const RequestSection = () => {
    return (
        <>
            <p className={classes.mapSectionTitle}>Оставьте заявку, мы с вами свяжемся</p>
            <div className={classes.formWrapper}>
                <div className={classes.textContent}>
                    <p className={classes.text28}>Наши Контакты</p>
                    <p>nikita456nikita@yandex.ru</p>
                    <p>+375445846948</p>
                    <p>@t.me/nabiraunamerok</p>
                </div>
                <RequestForm />
            </div>
        </>
    )
}
