import React, { useState, useEffect } from 'react';

function Button({children}) {
    return (
        <button>
            <p>{children}</p>
        </button>

    );
}

export default Button;