// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore' // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHgz2a6C5l-eWJODJOAMXWjhpeQAJz_Rg',
  authDomain: 'inventory-management-app-cab61.firebaseapp.com',
  projectId: 'inventory-management-app-cab61',
  storageBucket: 'inventory-management-app-cab61.appspot.com',
  messagingSenderId: '835465053173',
  appId: '1:835465053173:web:f44b38dc0d39776be796bc',
  measurementId: 'G-GRVGZ6T8M6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app) // Initialize Firestore

export { firestore } // Make sure to export Firestore
