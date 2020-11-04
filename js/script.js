$(document).ready(function () {
  $(".sl").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    responsive: [{
        breakpoint: 1125,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});

$(".accordeon__item-body")
  .hide()
  .prev()
  .click(function () {
    $(".accordeon__item-body").not(this).slideUp();
    $(this).next().not(":visible").slideDown();
  });

$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    responsive: [{
        breakpoint: 1125,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});

let map;

function initMap() {
  let dote = {
    lat: 51.4957591,
    lng: 31.220499
  };
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 51.4957591,
      lng: 31.220499
    },
    zoom: 9,
  });
  let marker = new google.maps.Marker({
    position: dote,
    map: map,
  });
}

$(function () {
  $(".js-nav-toggle").on("click", function () {
    $(this).toggleClass("toggler__icon--open");
    $(".js-navigation").toggleClass("navigation--open");
  });
});

function viewDiv() {
  document.getElementById("details").style.display = "block";
  document.getElementById("btn").style.display = "none";
}

function viewDiv1() {
  document.getElementById("details1").style.display = "block";
  document.getElementById("btn1").style.display = "none";
}

function viewDiv2() {
  document.getElementById("details2").style.display = "block";
  document.getElementById("btn2").style.display = "none";
}

function viewDiv3() {
  document.getElementById("details3").style.display = "block";
  document.getElementById("btn3").style.display = "none";
}

function viewDiv4() {
  document.getElementById("details4").style.display = "block";
  document.getElementById("btn4").style.display = "none";
}

function viewDiv5() {
  document.getElementById("details5").style.display = "block";
  document.getElementById("btn5").style.display = "none";
}
// кнопка скрыть 
function viewDiv6() {
  document.getElementById("details5").style.display = "none";
  document.getElementById("btn5").style.display = "block";
}

function viewDiv7() {
  document.getElementById("details4").style.display = "none";
  document.getElementById("btn4").style.display = "block";
}

function viewDiv8() {
  document.getElementById("details3").style.display = "none";
  document.getElementById("btn3").style.display = "block";
}

function viewDiv9() {
  document.getElementById("details2").style.display = "none";
  document.getElementById("btn2").style.display = "block";
}

function viewDiv10() {
  document.getElementById("details1").style.display = "none";
  document.getElementById("btn1").style.display = "block";
}

function viewDiv11() {
  document.getElementById("details").style.display = "none";
  document.getElementById("btn").style.display = "block";
}

function viewCalc() {
  document.getElementById("calc").style.display = "block";
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2020 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 13 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock("countdown", deadline);

function initializeClock(id1, endtime) {
  var clock = document.getElementById(id1);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2020 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 13 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock("countdown1", deadline);

function initializeClock(id2, endtime) {
  var clock = document.getElementById(id2);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2020 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 13 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock("countdown2", deadline);