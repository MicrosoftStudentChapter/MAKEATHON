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

$(".modal").each(function () {
  $(this).wrap('<div class="overlay"></div>');
});

$(".open-modal").on("click", function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;

  var $this = $(this),
    modal = $($this).data("modal");

  $(modal).parents(".overlay").addClass("open");
  setTimeout(function () {
    $(modal).addClass("open");
  }, 350);

  $(document).on("click", function (e) {
    var target = $(e.target);

    if ($(target).hasClass("overlay")) {
      $(target)
        .find(".modal")
        .each(function () {
          $(this).removeClass("open");
        });
      setTimeout(function () {
        $(target).removeClass("open");
      }, 350);
    }
  });
});

$(".close-modal").on("click", function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;

  var $this = $(this),
    modal = $($this).data("modal");

  $(modal).removeClass("open");
  setTimeout(function () {
    $(modal).parents(".overlay").removeClass("open");
  }, 350);
});

let day1events = [
  "EVENT 1",
  "EVENT 2",
  "EVENT 3",
  "EVENT 4",
  "EVENT 5",
  "EVENT 6",
  "EVENT 7",
  "EVENT 8",
  "EVENT 9",
  "EVENT 10",
];

let day1description = [
  "DESCRIPTION 1",
  "DESCRIPTION 2",
  "DESCRIPTION 3",
  "DESCRIPTION 4",
  "DESCRIPTION 5",
  "DESCRIPTION 6",
  "DESCRIPTION 7",
  "DESCRIPTION 8",
  "DESCRIPTION 9",
  "DESCRIPTION 10",
];

function d1e1() {
  document.getElementById("title").innerHTML = day1events[0];
  document.getElementById("description").innerHTML = day1description[0];
}

function d1e2() {
  document.getElementById("title").innerHTML = day1events[1];
  document.getElementById("description").innerHTML = day1description[1];
}

function d1e3() {
  document.getElementById("title").innerHTML = day1events[2];
  document.getElementById("description").innerHTML = day1description[2];
}

function d1e4() {
  document.getElementById("title").innerHTML = day1events[3];
  document.getElementById("description").innerHTML = day1description[3];
}

function d1e5() {
  document.getElementById("title").innerHTML = day1events[4];
  document.getElementById("description").innerHTML = day1description[4];
}

function d1e6() {
  document.getElementById("title").innerHTML = day1events[5];
  document.getElementById("description").innerHTML = day1description[5];
}

function d1e7() {
  document.getElementById("title").innerHTML = day1events[6];
  document.getElementById("description").innerHTML = day1description[6];
}

function d1e8() {
  document.getElementById("title").innerHTML = day1events[7];
  document.getElementById("description").innerHTML = day1description[7];
}

function d1e9() {
  document.getElementById("title").innerHTML = day1events[8];
  document.getElementById("description").innerHTML = day1description[8];
}

function d1e10() {
  document.getElementById("title").innerHTML = day1events[9];
  document.getElementById("description").innerHTML = day1description[9];
}
