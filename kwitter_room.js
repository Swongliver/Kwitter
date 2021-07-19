
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBQX1NpOsF55xQoQAL9R2QR5LNnNHnZs8c",
      authDomain: "kwitter-fb77d.firebaseapp.com",
      databaseURL: "https://kwitter-fb77d-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb77d",
      storageBucket: "kwitter-fb77d.appspot.com",
      messagingSenderId: "516178910838",
      appId: "1:516178910838:web:a0a81fa95c28fce5408957"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  username=localStorage.getItem("username",username)
  document.getElementById("username").innerHTML="Welcome "+username;
  //ADD YOUR FIREBASE LINKS HERE
  function addroom(){
        room_name=document.getElementById("add").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding username"
              
        })
        localStorage.setItem("room", room_name);
        window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML+=row
        //End code
        });});}
  getData();
  function logout(){
        window.location="index.html";
        localStorage.removeItem("username");
  }
  function redirect(room_page){
        window.location="kwitter_page.html"
        
        localStorage.setItem("room-page",room_page)
  }
  