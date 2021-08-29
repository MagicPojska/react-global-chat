import './App.css';
import React, { useState, useEffect } from 'react';

//Components
import Btn from './components/Btn';
import BtnSignOut from './components/BtnSignOut';
import Channel from './components/Channel'

//Firebase
import { auth, db } from './firebase'
import firebase from 'firebase/compat/app';

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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
  }, []);

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    auth.useDeviceLanguage();
    // Start sign in process
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };


  if (initializing) return 'Loading ...';


  return (
    <div className='content'>
      {user ? (
        <>
          <BtnSignOut />
          <Channel user={user} db={db} />
        </>
      ) : (
        <Btn onClick={signInWithGoogle}>Sign in with Google</Btn>)}

    </div>
  );
}

export default App;
