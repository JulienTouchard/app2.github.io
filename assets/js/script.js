var back = document.getElementById("back");
var close = document.getElementById("close");

var download = document.getElementById("download");
var app1BtnDesk = document.getElementById("app1BtnDesk");
var app1Btn = document.getElementById("app1Btn");
var btnModal = document.getElementsByClassName("btnModal");
console.dir(btnModal);

console.dir(back);

// Fonction de fermeture de la modale
function closeModal() {
    back.style.display = "none";
}
// Fonction de déploiement de la modale
function openModal() {
    back.style.display = "block";

}
download.addEventListener("click",openModal);
app1BtnDesk.addEventListener("click",openModal);
app1Btn.addEventListener("click",openModal);
btnModal[0].addEventListener("click",openModal);
btnModal[1].addEventListener("click",openModal);
close.addEventListener("click",closeModal);