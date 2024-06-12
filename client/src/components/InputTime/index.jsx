import classes from './styles.module.css'

function InputTime({value, onChange, name, label}) {
    return (
        <div className={classes.input__wrapper}>
            {label !== undefined && <label className={classes.label__element} htmlFor={name}>{label}</label>}
            <input
                className={classes.input__element}
                id={name}
                type={"time"}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>

    );
}

export default InputTime;