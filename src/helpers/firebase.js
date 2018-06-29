import firebase from 'firebase/app'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyBN1Bb4iMKr-TxeYQQxsxk30KTqY6AeaH4",
    authDomain: "football-game-208608.firebaseapp.com",
    databaseURL: "https://football-game-208608.firebaseio.com",
    projectId: "football-game-208608",
    storageBucket: "football-game-208608.appspot.com",
    messagingSenderId: "121165779175"
  };
  firebase.initializeApp(config);

let db= firebase.database()
let roomOne = db.ref('rooms/one')
let roomTwo = db.ref('rooms/two')
let roomThree = db.ref('rooms/three')

export { roomOne, roomTwo, roomThree }
