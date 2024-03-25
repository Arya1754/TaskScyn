import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvtTJgOZEsCjrF_hhuy27ndvRfE8VytTw",
    authDomain: "tasksync-9ddcf.firebaseapp.com",
    projectId: "tasksync-9ddcf",
    storageBucket: "tasksync-9ddcf.appspot.com",
    messagingSenderId: "934732744220",
    appId: "1:934732744220:web:511ab6f4d0b1e84b1781d9",
    measurementId: "G-ZT9SP49HH1"
  };

initializeApp(firebaseConfig);
console.log('hi')
const auth = getAuth();

document.addEventListener('DOMContentLoaded', function() {
   
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        
        logoutButton.addEventListener('click', function() {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    console.log('User signed out successfully.');
                    window.location.href = 'login.html'; 
                })
                .catch((error) => {
                    console.error('Error signing out:', error.message);
                });
        });
    }
});




