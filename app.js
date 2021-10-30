// setting delay time
let toptime = document.getElementById("time1");
let centertime = document.getElementById("time2");
let day1 = document.getElementById("day");
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// creating function which shows the time  showtime();
function showtime() {
  //creating a variable which stores today date //
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var day = today.getDay();
  var date = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  time1.textContent = date + "/" + month + "/" + year;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  time2.textContent = hours + ":" + minutes + ":" + seconds;
  day1.textContent = days[day];
}
setInterval(showtime, 1000);
//sms pogression
let clicking = true;
let msg = `
        <div id="msg-list">
        <p id="java">Java</p>
        <p id="html">Html</p>
        <p id="css">Css</p> </div>`;
document.getElementById("chat").addEventListener("click", () => {
  
  if (clicking) {
    document.querySelector("#msg-container").innerHTML = msg;
    document.querySelector("#msg-container").style.display = "block";
    document.querySelector("#middletime").style.display = "none";
    document.querySelector("#logos").style.marginTop = "22px";
    clicking = false;
  } else {
    document.querySelector("#middletime").style.display = "block";
    document.querySelector("#msg-container").style.display = "none";
    document.querySelector("#logos").style.marginTop = "45px";
    clicking = true;
    
  }
  var java = document.getElementById("java");
    var html = document.getElementById("html");
    var css = document.getElementById("css");
  java.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let javaMsg = `<p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>`;
    document.querySelector("#msg-container").innerHTML = javaMsg;
  });

  html.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let htmlMsg = `<p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>`;
    document.querySelector("#msg-container").innerHTML = htmlMsg;
  });

  css.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let cssMsg = `<p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>`;
    document.querySelector("#msg-container").innerHTML = cssMsg;
  });
});
