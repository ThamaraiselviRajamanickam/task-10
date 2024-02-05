var menu = document.getElementById("menu");
var display = 0;

function hide() {
  if (display == 1) {
    menu.style.display = "block";
    display = 0;
  }
   else {
    menu.style.display = "none";
    display = 1;
  }
}

// var firD = document.getElementById("hide");
// var display = 0;
// function show() {
//   if (display == 1) {
//     firD.style.display = "block";
//     display = 0;
//   } else {
//     firD.style.display = "none";
//     display = 1;
//   }
// }
