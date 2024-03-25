import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

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

const auth = getAuth();

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName= signupForm.fullName.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const confirmpassword = signupForm.confirmPassword.value;
        console.log(email)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;
                console.log('User signed up:', user);
                signupForm.reset();
                window.location.href = 'login.html';
            })
            .catch((error) => {
                console.log(email)
                console.log(error)
                console.error('Error signing up:', error.message);
            });
    });
  }


// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm){
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        console.log(email)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User logged in:', user);
                loginForm.reset();
                window.location.href = 'home.html';
            })
            .catch((error) => {
                console.log(email)
                console.log(error)
                console.error('Error logging in:', error.message);
            });
    });
    
  }



// // Auth State Change
// onAuthStateChanged(auth, (user) => {
//     console.log('User status changed:', user);
// });
