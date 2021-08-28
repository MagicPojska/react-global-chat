import React, { useState, useEffect } from 'react';

//Components
import Button from './components/Button';

//Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCw2luT-fWCHeU-xhXbndxy7tSLNl3O54k",
  authDomain: "react-global-chat-77aed.firebaseapp.com",
  projectId: "react-global-chat-77aed",
  storageBucket: "react-global-chat-77aed.appspot.com",
  messagingSenderId: "628753201334",
  appId: "1:628753201334:web:5b6747e4ddba9a58cace17"
});

function App() {
  const [user, setUser] = useState(() => firebase.auth().currentUser);
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null)
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  });

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  }

  if (initializing) return 'Loading ...';
  return (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}>Sign out</Button>
          <p>Welcome to the chat</p>
        </>
      ) : (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>)}

    </div>
  );
}

export default App;
