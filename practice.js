const firebaseConfig = {
    apiKey: "AIzaSyD9a0iaUWuO7V4tbQSyqDGz7BZONgFFMMQ",
    authDomain: "instafacetiktoktwitter.firebaseapp.com",
    databaseURL: "https://instafacetiktoktwitter-default-rtdb.firebaseio.com",
    projectId: "instafacetiktoktwitter",
    storageBucket: "instafacetiktoktwitter.appspot.com",
    messagingSenderId: "1018062853330",
    appId: "1:1018062853330:web:9b5c39b4d1e04d3cdb490b",
    measurementId: "G-L57WDVQXE0"
  };
  firebase.initializeApp(firebaseConfig);





  function addUser(){
 var userName=document.getElementById("userName").value;
 firebase.database().ref("/").child(userName).update({
purpose:"adding user"
 });
  }