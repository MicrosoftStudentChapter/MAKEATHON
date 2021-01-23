function scrollEvents() {
  let scrollFromTop = document.querySelector("html").scrollTop;
  let eventsDiv = document.querySelector("#timeline #events");

  eventsDiv.scrollTop =
    (1.5 * scrollFromTop) %
    (eventsDiv.scrollHeight - eventsDiv.clientHeight + 1);
}

function show() {
  let day1 = document.getElementById("day-1-events");
  let day2 = document.getElementById("day-2-events");
  day1.classList.add("hidden");
  day2.classList.remove("hidden");
}

function showAgain() {
  let day1 = document.getElementById("day-1-events");
  let day2 = document.getElementById("day-2-events");
  day1.classList.remove("hidden");
  day2.classList.add("hidden");
}
