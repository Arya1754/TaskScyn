/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/login.js":
/*!*********************!*\
  !*** ./js/login.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyCvtTJgOZEsCjrF_hhuy27ndvRfE8VytTw\",\n  authDomain: \"tasksync-9ddcf.firebaseapp.com\",\n  projectId: \"tasksync-9ddcf\",\n  storageBucket: \"tasksync-9ddcf.appspot.com\",\n  messagingSenderId: \"934732744220\",\n  appId: \"1:934732744220:web:511ab6f4d0b1e84b1781d9\",\n  measurementId: \"G-ZT9SP49HH1\"\n};\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);\nvar auth = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n//signup\nvar signupForm = document.querySelector('.signupForm');\nsignupForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var fullname = signupForm.fullName.value;\n  var email = signupForm.email.value;\n  var password = signupForm.password.value;\n  var confirmpassword = signupForm.confirmPassword.value;\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, fullname, email, password, confirmpassword).then(function (cred) {\n    // console.log('user created:',cred.user)\n    signupForm.reset();\n  })[\"catch\"](function (err) {\n    console.log(err.message);\n  });\n});\n//login and out\n\n//const logoutButton=document.querySelector('.logout')\n//logoutButton.addEventListener('click',()=>{\n//signOut(auth)\n//.then(()=>{\n//console.log('the user is signed out')\n//})\n//.catch((err)=>{\n//console.log(err.message)\n//})\n//})\n\nvar loginForm = document.querySelector('.login');\nloginForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var email = loginForm.email.value;\n  var password = loginForm.password.value;\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, email, password).then(function (cred) {\n    // console.log('user logged in:',cred.user)\n  })[\"catch\"](function (err) {\n    console.log(err.message);\n  });\n});\n\n//auth change \nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, function (user) {\n  console.log('user status changed:', user);\n});\n\n//# sourceURL=webpack://taskscyn/./js/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/login.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;