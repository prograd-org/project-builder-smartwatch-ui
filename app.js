var eveyday=new Date();
var hrs=eveyday.getHours();
if(hrs<10){
    hrs=`0${hrs}`;
}
var min=eveyday.getMinutes();
if(min<10){
    min=`0${min}`;
}
var time=hrs+" : "+min;
document.getElementById('firsttime').innerHTML=time;
document.getElementById('secondtime').innerHTML=time;
var days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
var dyasofweek=days[new Date().getDay()];
document.getElementById('day').innerHTML=dyasofweek;