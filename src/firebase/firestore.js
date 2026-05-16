import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore"

import app from "./config"

const db = getFirestore(app)

export {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
}