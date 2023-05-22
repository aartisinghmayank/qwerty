
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBYAJ1lzJGR46_WnY5MQiCiv0hR1IKB-qo",
  authDomain: "kwitter-2e89f.firebaseapp.com",
  databaseURL: "https://kwitter-2e89f-default-rtdb.firebaseio.com",
  projectId: "kwitter-2e89f",
  storageBucket: "kwitter-2e89f.appspot.com",
  messagingSenderId: "87105563520",
  appId: "1:87105563520:web:9064bc4e0ced5929762f65"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"

  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
console.log("room name="+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;

              //End code
        });
  });
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}