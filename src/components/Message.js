import { formatRelative } from "date-fns";
import { auth } from "../firebase";

function Message({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
  uid = "",
}) {
  return (
    <div
      className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}
    >
      {photoURL ? (
        <img src={photoURL} alt="" width={45} height={45}></img>
      ) : null}

      <div className="message-text">
        <p className="msg-text">{text}</p>
        <div className="message-info">
          {createdAt?.seconds ? (
            <span>
              {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
            </span>
          ) : null}
          {displayName ? <p className="u-name">{displayName}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Message;
