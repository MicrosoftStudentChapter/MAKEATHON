$(document).ready(function () {
  $(".targetDiv").hide();
  $("#div1").show();
  $(".Single1").click(function () {
    document.querySelectorAll(".couple").forEach((i) => {
      i.style.backgroundColor = "transparent";
    });
    document.querySelectorAll(".Single1").forEach((i) => {
      i.style.backgroundColor = "rgba(255, 255, 255, 0.24)";
    });
    $(".targetDiv").hide();
    $("#div1").show();
  });
  $(".Single2").click(function () {
    document.querySelectorAll(".couple").forEach((i) => {
      i.style.backgroundColor = "transparent";
    });
    document.querySelectorAll(".Single2").forEach((i) => {
      i.style.backgroundColor = "rgba(255, 255, 255, 0.24)";
    });
    $(".targetDiv").hide();
    $("#div2").show();
  });
  $(".Single3").click(function () {
    document.querySelectorAll(".couple").forEach((i) => {
      i.style.backgroundColor = "transparent";
    });
    document.querySelectorAll(".Single3").forEach((i) => {
      i.style.backgroundColor = "rgba(255, 255, 255, 0.24)";
    });
    $(".targetDiv").hide();
    $("#div3").show();
  });
  $(".Single4").click(function () {
    document.querySelectorAll(".couple").forEach((i) => {
      i.style.backgroundColor = "transparent";
    });
    document.querySelectorAll(".Single4").forEach((i) => {
      i.style.backgroundColor = "rgba(255, 255, 255, 0.24)";
    });
    $(".targetDiv").hide();
    $("#div4").show();
  });
});

function closeForm() {
  $(".form-popup-bg").removeClass("is-visible");
}

$(document).ready(function ($) {
  /* Contact Form Interactions */
  $("#btnOpenForm").on("click", function (event) {
    event.preventDefault();

    $(".form-popup-bg").addClass("is-visible");
  });

  //close popup when clicking x or off popup
  $(".form-popup-bg").on("click", function (event) {
    if (
      $(event.target).is(".form-popup-bg") ||
      $(event.target).is("#btnCloseForm")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
});
