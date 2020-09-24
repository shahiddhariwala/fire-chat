import React from 'react';
import './App.css';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({

});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
