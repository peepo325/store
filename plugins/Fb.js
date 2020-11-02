import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAjEL9DIpwVNTZDs-50czq27AG9UF70RsU',
    authDomain: 'store-d526c.firebaseapp.com',
    databaseURL: 'https://store-d526c.firebaseio.com',
    projectId: 'store-d526c',
    storageBucket: 'store-d526c.appspot.com',
    messagingSenderId: '1054775564945',
    appId: '1:1054775564945:web:f8f4f0fc29f08c84f1fd30',
  }
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  db.settings({ timestampsInSnapshots: true })
}

export const db = firebase.firestore()
