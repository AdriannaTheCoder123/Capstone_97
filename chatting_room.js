var firebaseConfig = {
    apiKey: "AIzaSyADR9VIl1xz_Mo3C2rcc2PUsfnLsGh2QQI",
    authDomain: "chat-cats.firebaseapp.com",
    databaseURL: "https://chat-cats-default-rtdb.firebaseio.com",
    projectId: "chat-cats",
    storageBucket: "chat-cats.appspot.com",
    messagingSenderId: "121879284420",
    appId: "1:121879284420:web:f5820804795d0357c71791"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({

    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "chatting_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name-" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +" </div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}

getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "chatting_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}