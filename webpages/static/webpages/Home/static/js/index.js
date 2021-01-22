// Set the date we're counting down to
var countDownDate = new Date("Feb 23, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor(distance / 1000);

  // console.log(days,hours,minutes);
  console.log(seconds);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML += days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
  // var str = `<h1>${days} d </h1>` + hours + "h " + minutes + "m " +seconds + "s ";
  var str = "";
  var time = String(seconds);

  for (var i = 0; i < time.length; i++) {
    // `<span class="timerspan col-md-3">${time[i]}</span >`
    // str += <span class="wrapper-class timerspan"> ${time[i]} </span>;
    // `<span class="number B"> ${time[i]} </span>` +
    // `<span class="number Y"> ${time[i]} </span>` +
    // `<span class="number C"> ${time[i]} </span>` +
    // `<span class="number M2"> ${time[i]} </span>` +
    // `<span class="number B2"> ${time[i]} </span>` +
    // `<span class="number Y2"> ${time[i]} </span>` +
    // `<span class="number C2"> ${time[i]} </span>`;
    // console.log(str);
    str += generateTimer(time[i]);
  }
  // str += `<div class="time-left" style="text-align: right"><img id="tleft" src="./static/images/tleft-1.png" alt=""></div>`;
  document.getElementById("demo").innerHTML = str;
  // document.getElementById("demo").innerHTML = hours + "h ";
  // document.getElementById("demo").innerHTML = minutes + "m ";
  // document.getElementById("demo").innerHTML = seconds + "s ";

  str = "";
  // styling the text
  // document.getElementById("demo").style.color = "#ffffff";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Sidenavbar Toggle

function myFunction() {
  var x = document.getElementById("kyun");
  var y = document.getElementById("maaze");

  if (x.style.display === "none") {
    x.style.display = "initial";
    y.classList.remove("fa-bars");
    y.classList.add("fa-window-close");
  } else {
    x.style.display = "none";
    y.classList.remove("fa-window-close");
    y.classList.add("fa-bars");
  }
}

function generateTimer(x) {
  return (
    `<div class="timerspan">` +
    `<div class="wrapper-class"><span class="number M"> ${x} </span>` +
    `<span class="number B"> ${x} </span>` +
    `<span class="number Y"> ${x} </span>` +
    `<span class="number C"> ${x} </span>` +
    `<span class="number M2"> ${x} </span>` +
    `<span class="number B2"> ${x} </span>` +
    `<span class="number Y2"> ${x} </span> </div> </div>`
  );
}
