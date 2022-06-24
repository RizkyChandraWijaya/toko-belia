// Conveniently import this file anywhere to use db

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// export const db = firebase
//     .initializeApp({ projectId: 'pwlfinal-965d7' })
//     .firestore()

    const firebaseConfig = {
        apiKey: "AIzaSyCba_oFRI6U021-zBCTd3pVAo2rAK7wbjw",
        authDomain: "pwlfinal-965d7.firebaseapp.com",
        projectId: "pwlfinal-965d7",
        storageBucket: "pwlfinal-965d7.appspot.com",
        messagingSenderId: "197750934986",
        appId: "1:197750934986:web:a5d373a0bfd7437b94d333",
        measurementId: "G-4FC0MYV7DD"
      };
      
      const app = firebase.initializeApp(firebaseConfig);
      export  const db = firebase.firestore(app);
      
// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
