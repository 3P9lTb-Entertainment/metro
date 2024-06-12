import classes from './styles.module.css'

function InputText({value, onChange, name, label, placeholder}) {
    return (
        <div className={classes.input__wrapper}>
            {label !== undefined && <label className={classes.label__element} htmlFor={name}>{label}</label>}
            <input
                autoComplete={'off'}
                className={classes.input__element}
                id={name}
                type={"text"}
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
            />
        </div>

    );
}

export default InputText;