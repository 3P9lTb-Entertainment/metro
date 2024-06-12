import classes from './styles.module.css'

function Station({station}) {
    return (
        <div className={classes.station__wrapper}>
            <div className={classes.label__wrapper} style={{backgroundColor: `var(--color-line-${station.id_line})`}}></div>
            <p>{station.name_station}</p>
        </div>
    );
}

export default Station;