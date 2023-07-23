function myfun() {
    document.getElementById("test").innerHTML = "It changed";
}

function docWrite() {
    document.getElementById("test").document.write = "Access denied";
}