import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function BtnSignOut() {



    return (
        <div style={{
            display: 'flex', justifyContent: 'flex-end', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default BtnSignOut
