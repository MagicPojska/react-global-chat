import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { Input, Button } from "@material-ui/core";

function Channel({ user = null, db = null }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, displayName, photoURL } = user;

  const inputRef = useRef();
  const bottomListRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(data);
        });

      return unsubscribe;
    }
  }, [db, inputRef]);

  const handleOnChange = async (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: new Date(),
        uid,
        displayName,
        photoURL,
      });
    }

    bottomListRef.current.scrollIntoView({ behavior: "smooth" });
    setNewMessage("");
  };

  return (
    <div>
      <div className="chatbox">
        <ul>
          <div className="msgs">
            {messages.map((message) => (
              <li key={message.id}>
                <Message {...message} />
              </li>
            ))}
          </div>
          <div ref={bottomListRef} />
        </ul>
      </div>

      <form onSubmit={handleOnSubmit}>
        <div className="sendMsg">
          <Input
            ref={inputRef}
            style={{
              width: "93%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            type="text"
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Type your message here"
          />
          <Button type="submit" disabled={!newMessage}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Channel;
