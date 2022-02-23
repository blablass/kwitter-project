function adduser(){
    username =document.getElementById("inputb").value;
    localStorage.setItem("username_key",username);
    window.location = "kwitter_room.html";
}