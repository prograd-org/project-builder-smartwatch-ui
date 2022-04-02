var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var setTime = setInterval(showtime, 1000);


function showtime()
{
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var day = today.getDay();


    if(hours<10)
    {
        hours= `0${hours}`;
    }

    if(minutes<10)
    {
        minutes=`0${minutes}`;

    }

       topt.innerHTML=hours+":"+ minutes;
       middle.innerHTML= hours+":"+minutes;
       daydis.innerHTML= days[day];
}

      setInterval(time,1000);