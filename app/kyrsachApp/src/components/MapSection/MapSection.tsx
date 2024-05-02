import classes from './mapSection.module.css'
import {Map} from "../Map/Map";

export const MapSection = () => {
    return (
        <>
            <p className={classes.mapSectionTitle} id='about'>Охватываем большую часть страны</p>
            <div className={classes.mapWrapper}>
                <div className={classes.textContent}>
                <p className={classes.mapTitle}>У нас Уже более 200 офисов по всей стране</p>
                <p>Наша клининговая компания предлагает услуги уборки офисов по всей стране. Мы специализируемся на
                    обслуживании офисных помещений всех размеров и типов, включая компании любой отрасли и организации
                    различных масштабов. Независимо от местоположения вашего офиса, наша команда профессиональных уборщиков готова предложить
                    качественные услуги, соответствующие вашим потребностям.</p>
                </div>
                <Map />
            </div>
        </>
    )
}
