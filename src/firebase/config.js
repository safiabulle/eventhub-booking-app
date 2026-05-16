import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyApuwPsIyyZgx_Svu3fRWh6qgjj_fIrgRw",
  authDomain: "eventhub-booking-app.firebaseapp.com",
  projectId: "eventhub-booking-app",
  storageBucket: "eventhub-booking-app.firebasestorage.app",
  messagingSenderId: "546015795120",
  appId: "1:546015795120:web:fdda8d6a0ba81c3aaee875",
}

const app = initializeApp(firebaseConfig)

export default app