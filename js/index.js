//Function for displaying the game
$(function() {
  $("#main_image").click(function() {
    if ($(window).width() >= 992) {
      $("#help_text, #main_image, #main_text, #main_icon").hide();
      $("#counter_div, #snake_div, #press, #_back, #help_text2").show();
      $("body").addClass("firegrad");
    }
  });
});

function displayBack() {
  $("#main_image, #main_text, #main_icon, #help_text").show();
  $("#counter_div, #_back, #press, #snake_div, #help_text2").hide();
  $("body").removeClass("firegrad");
}

//The Score tracker
var counter = 0;
$("#counter").html(`SCORE: ${counter}`);

//The Snake Game
window.onload = function() {
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 15);
};
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;

function game() {
  px += xv;
  py += yv;
  if (px < 0) {
    px = tc - 1;
  }
  if (px > tc - 1) {
    px = 0;
  }
  if (py < 0) {
    py = tc - 1;
  }
  if (py > tc - 1) {
    py = 0;
  }
  ctx.fillStyle = "#1b1b1b";
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = "lime";
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
      tail = 5;
      counter = 0;
      $("#counter").html(`SCORE: ${counter}`);
    }
  }
  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == px && ay == py) {
    counter++;
    $("#counter").html(`SCORE: ${counter}`);
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(evt) {
  switch (evt.keyCode) {
    case 37:
      xv = -1;
      yv = 0;
      break;
    case 38:
      xv = 0;
      yv = -1;
      break;
    case 39:
      xv = 1;
      yv = 0;
      break;
    case 40:
      xv = 0;
      yv = 1;
      break;
  }
}
