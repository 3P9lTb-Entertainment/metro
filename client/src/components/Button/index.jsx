import React, { useState, useEffect } from 'react';
import classes from './styles.module.css'

function Button({children, onClick}) {
    return (
        <button
            className={classes.button__wrapper}
            onClick={onClick}
        >
            <p className={classes.button__text}>{children}</p>
        </button>
    );
}

export default Button;