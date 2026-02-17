window.addEventListener("scroll", function(){
let header = document.querySelector("header");
header.style.background = window.scrollY > 50 ? "#020617" : "rgba(15,23,42,0.9)";
});
