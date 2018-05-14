import firebase from 'firebase'

const config = {
        apiKey: "AIzaSyAqlaJPjmgGqfNdzHdzoCtSqUgu70vA0vY",
        authDomain: "etsy-project-9696e.firebaseapp.com",
        databaseURL: "https://etsy-project-9696e.firebaseio.com",
        projectId: "etsy-project-9696e",
        storageBucket: "etsy-project-9696e.appspot.com",
        messagingSenderId: "1080929571550"

      };
const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.database()

export default db





// apiKey: "AIzaSyBAfUWcVzFdiWIeiXXkI9EpCwprL55WsiQ",
// authDomain: "etsy-2e9e5.firebaseapp.com",
// databaseURL: "https://etsy-2e9e5.firebaseio.com",
// projectId: "etsy-2e9e5",
// storageBucket: "etsy-2e9e5.appspot.com",
// messagingSenderId: "852333090030"