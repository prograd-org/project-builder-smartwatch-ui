var everyday = new Date();
var hrs = everyday.getHours();
if(hrs<10){
    hrs=`0${hrs}`;
}
var min = everyday.getMinutes();
if(min<10){
    min=`0${min}`;
}
var time = hrs + " : " + min;
document.getElementById('firsttime').innerHTML = time;
document.getElementById('secondtime').innerHTML = time;
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var daysofweek = days[new Date().getDay()];
document.getElementById('day').innerHTML = daysofweek;