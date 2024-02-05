function a() {
  alert("SECOND PAGE LOADED");
}

var img1 = document.getElementById("img");
function b() {
  img1.addEventListener("mouseover", c);
}
function c() {
  img1.style.borderStyle = "dashed";
}
