

const firebaseConfig = {
    apiKey: "AIzaSyBt77aVAOk_R-p9ZDMMZrR8kN6xjrgdBEE",
  authDomain: "kwitter-81dde.firebaseapp.com",
  databaseURL: "https://kwitter-81dde-default-rtdb.firebaseio.com",
  projectId: "kwitter-81dde",
  storageBucket: "kwitter-81dde.appspot.com",
  messagingSenderId: "1044204966084",
  appId: "1:1044204966084:web:5089a0e9e044e4e558b991" };
   // Initialize Firebase firebase.initializeApp(firebaseConfig);
   firebase.initializeApp(firebaseConfig);

   username = localStorage.getItem("Name_of_user");
   room_name = localStorage.getItem("Room_Name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class ='message_h4'>"+ message + "</h4>";
    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value = " + like + "onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function logout_func(){
    localStorage.removeItem("Name_of_user");
    localStorage.removeItem("Room_Name");
    window.location = "index.html";      
}

function send_message(){
    msg = document.getElementById("msg").value;
    
    firebase.database().ref(room_name).push({
          name : username, 
          message : msg,
          like : 0
    });

    document.getElementById("msg").value = "";
}

function updateLike(message_id){
    console.log("Clicked On like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}
