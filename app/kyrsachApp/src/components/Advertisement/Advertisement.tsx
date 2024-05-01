import classes from './advertisement.module.css'
import {Button} from "../UI/Button/Button";

export const Advertisement = () => {
    return (
        <div className={classes.advertisementWrapper}>
            <div className={classes.advertisement}>
                <p className={classes.text32}>
                    Сияйте чистотой с нашей клининговой компанией!
                </p>
                <p className={classes.text16}>
                    Мы - профессиональные волшебники чистоты, готовые превратить ваше пространство в идеальный блеск.
                    Независимо от размера задания, наша команда экспертов предлагает полный спектр клининговых услуг,
                    чтобы удовлетворить все ваши потребности.
                </p>
                <Button buttonContent='Подробнее' />
            </div>
        </div>
    )
}
