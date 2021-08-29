import React from 'react'
import { Button } from '@material-ui/core'

function Btn({ onClick = null, children = null }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={onClick}>{children}</Button>
        </div>
    )
}

export default Btn
