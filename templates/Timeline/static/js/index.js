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
