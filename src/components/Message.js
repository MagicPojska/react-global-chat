import { formatRelative } from 'date-fns'

function Message({ createdAt = null, text = '', displayName = '', photoURL = '' }) {
    return (
        <div>
            {photoURL ? (<img src={photoURL} alt='Avatar' width={45} height={45}></img>) : null}
            {displayName ? <p>{displayName}</p> : null}
            {createdAt?.seconds ? (<span>{formatRelative(new Date(createdAt.seconds * 1000), new Date())}</span>) : null}
            <p>{text}</p>
        </div>
    )
}

export default Message