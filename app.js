var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
document.getElementById('small').innerHTML = time;
document.getElementById('timemiddle').innerHTML = time;
console.log(time);

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var names = days[new Date().getDay()];
document.getElementById('name').innerHTML = names;
console.log(names);