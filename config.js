import firebase from "firebase" 
 
 var firebaseConfig = {
    apiKey: "AIzaSyC-XlQGn9Rk4bXk0d_4KRmYFnMLXiRF3dA",
    authDomain: "student-attendance-2b7d8.firebaseapp.com",
    databaseURL: "https://student-attendance-2b7d8-default-rtdb.firebaseio.com",
    projectId: "student-attendance-2b7d8",
    storageBucket: "student-attendance-2b7d8.appspot.com",
    messagingSenderId: "295318481227",
    appId: "1:295318481227:web:f8ba486199a04da1d060ce"
  };
  // Initialize Firebase
  var app=firebase.initializeApp(firebaseConfig);
  export  default app.database()
