//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBQX1NpOsF55xQoQAL9R2QR5LNnNHnZs8c",
      authDomain: "kwitter-fb77d.firebaseapp.com",
      databaseURL: "https://kwitter-fb77d-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb77d",
      storageBucket: "kwitter-fb77d.appspot.com",
      messagingSenderId: "516178910838",
      appId: "1:516178910838:web:a0a81fa95c28fce5408957"
    };
    
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name1=message_data["username"];
message1=message_data["message"];
like1=message_data["likes"];
name_with_tag="<h4>"+ name1 +"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+ message1+"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value="+like+"onclick=update(this.id)>";
continutation_of_like="<span class='glyphicon glyphicon-thumbs-up'>Like"+like1+"</span></button><hr>";
whole_message=name_with_tag+message_with_tag+like_button+continutation_of_like;
document.getElementById("output").innerHTML=whole_message;
      } });  }); }
getData();
function update(message_id){
      like_value=document.getElementById(message_id).value;
      updated_likes=Number(like_value)+1;
      firebase.database().ref(room_name).child(message_id).update({
            likes: updated_likes
      });
}
function logout(){
      window.location="index.html";
      localStorage.removeItem("username");
}
var room_name=localStorage.getItem("room")
user_name=localStorage.getItem("username")
function message(){
      msg=document.getElementById("message").value
      console.log(room_name)
      firebase.database().ref(room_name).push({
            likes:0,
            username:user_name,
            message:msg            
      })

      document.getElementById("message").value=" ";
}
