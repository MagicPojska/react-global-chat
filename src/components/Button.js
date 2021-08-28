import React from 'react'

function Button({ onClick = null, children = null }) {
    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button
