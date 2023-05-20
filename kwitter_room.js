
const firebaseConfig = {
    apiKey: "AIzaSyCZwsAImTN-lslJBOWEk8xRc20bzhywy1Y",
    authDomain: "kwitter-2f326.firebaseapp.com",
    databaseURL: "https://kwitter-2f326-default-rtdb.firebaseio.com",
    projectId: "kwitter-2f326",
    storageBucket: "kwitter-2f326.appspot.com",
    messagingSenderId: "1005330235477",
    appId: "1:1005330235477:web:d3b0dac0ecc67512e4d4dc",
    measurementId: "G-6HTL4F1RZ8"
  };
firebase.initializeApp(firebaseConfig);
  
  const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
  
  
  function addRoom() 
  { room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
  localStorage.setItem("room_name", room_name); 
  window.location = "kwitter_page.html"; }
  
  function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row; }); }); } 
    getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

