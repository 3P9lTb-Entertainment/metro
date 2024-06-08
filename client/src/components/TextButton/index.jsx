import classes from './styles.module.css'

function TextButton({children}) {
    return (
        <button className={classes.button__wrapper}><p className={classes.button__text}>{children}</p></button>
    );
}

export default TextButton;
