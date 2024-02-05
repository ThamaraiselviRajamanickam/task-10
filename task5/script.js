function add() {
  var inputRef1 = document.getElementById("num1").value;
  var inputRef2 = document.getElementById("num2").value;
  var result =  parseInt(inputRef1) + parseInt(inputRef2);
  document.getElementById("num3").value = result;
}


// var one=document.getElementById("one");
// var two=document.getElementById("two");
// var three=document.getElementById("three")
// function change(){
// var result=parseInt(one.value) +parseInt(two.value);
// three.value=result
// }