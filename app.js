// setting delay time 
let toptime=document.getElementById("time1");
let centertime=document.getElementById("time2")
let day1=document.getElementById("day")
var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var setTime = setInterval(showtime,1000);

// creating function which shows the time  showtime();
function showtime(){
    //creating a variable which stores today date //
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds=today.getSeconds();
    var day = today.getDay(); 

if(hours<10){
        hours=`0${hours}`;
    }
    if(minutes<10){
      minutes=`0${minutes}`;
      }
      if(seconds<10){
        seconds=`0${seconds}`;
        }

      time1.textContent= hours+":"+ minutes+":"+seconds;
      time2.textContent= hours+":"+minutes+":"+seconds;
      day1.textContent= days[day];
      }
      setInterval(time,1000);