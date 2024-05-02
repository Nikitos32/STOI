import classes from './map.module.css'

export const Map = () => {
    return (
        <a href="https://www.google.com/maps/search/%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F/@53.9041316,27.5200292,11.5z?entry=ttu">
            <div className={classes.map}>
                <img className={classes.mapImg} width='500px' height='100%' src="/public/img/map.jpg" alt="map"/>
            </div>
        </a>
    )
}
