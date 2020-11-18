function getCurrentDate(){
    var curDate=new Date();
    var day= curDate.getDay();
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    document.getElementById("smartDay").innerHTML = weekday[day];
    
    var hours = curDate.getHours(); 
    var minutes = curDate.getMinutes(); 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    var myTime = hours + " " + " : " + minutes;
    document.getElementById("smartTime").innerHTML = myTime; 
    document.getElementById("smartTimeBig").innerHTML = myTime;

}