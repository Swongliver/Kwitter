function Login(){
username=document.getElementById("username_input").value;
console.log(username)
localStorage.setItem("username", username);
if (username.length == 0) {
    window.alert("Enter Username")
}else{
    window.location="kwitter_room.html"
}

}