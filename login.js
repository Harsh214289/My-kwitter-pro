
function login(){
    username = document.getElementById("name_kwitter").value;
    localStorage.setItem("Username" , username);

    window.location = "kwitter.html";
}