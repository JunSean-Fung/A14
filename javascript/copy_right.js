var today = new Date();
// Get current Date
document.write("Current date: " + today.toDateString());

document.write("<br/>"); //Line break

var user= "JunSean Fung";
var dueD= "4/13/" + today.getFullYear();
document.write("&copy;&nbsp;" + "Due Date: " + dueD + ", " + user);
