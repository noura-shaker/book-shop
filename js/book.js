var hourNow = prompt("please enter your time");
var greeting;
if (hourNow > 18) {
greeting= 'Good evening!';
} else if (hourNow > 12) {
greeting = ' Good afternoon!';
} else if (hourNow > 0) {
greeting = 'Good morni ng!';
} else {
greeting = 'Welcome! ' ;}
document .write( ' <h3>' +greeting + ' </ h3> '); 

function ShowMessage(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

ShowMessage("im","noura", "shaker");
var txt;
var r = confirm("Press a button!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}



