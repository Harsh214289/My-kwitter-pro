//Firebase links
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

   username = localStorage.getItem("Username")
   room_name = localStorage.getItem("Room_Name")
    
    function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
    }

      document.getElementById("welcome_name").innerHTML = "Hi " + username + " !";


      function getData() {firebase.database().ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
      "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;

      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code

      });});}
      getData();

      function redirectToRoomName(name){
        console.log(name);

        localStorage.setItem("Room_name" , name);
        window.location = ""
      }
      function adding_room(){
        var name_folder = document.getElementById("room_name_kwitter").value;
        firebase.database().ref("/").child(name_folder).update({
              purpose : "adding room name"
        });
        localStorage.setItem("Room_name",name_folder);
   
        window.location = "kwitter_page.html";
   }
      

