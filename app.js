var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var min = today.getMinutes();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("time").innerHTML=hour+":"+min;
document.getElementById("day").innerHTML=daylist[day];
