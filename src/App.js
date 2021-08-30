import "./App.css";
import React, { useState, useEffect } from "react";

//Components
import Btn from "./components/Btn";
import BtnSignOut from "./components/BtnSignOut";
import Channel from "./components/Channel";

//Firebase
import { auth, db } from "./firebase";

function App() {
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="content">
      {user ? (
        <>
          <BtnSignOut>Sign out</BtnSignOut>
          <Channel user={user} db={db} />
        </>
      ) : (
        <Btn>Sign in with Google</Btn>
      )}
    </div>
  );
}

export default App;
