const canvas = document.querySelector("canvas#track");
const c = canvas.getContext("2d");

let alpha = 1;
let flag = false;

let configs = {
  length: getViewHeight(12.5),
  color: "rgb(255, 0, 212)",
  lineWidth: 10,
  shadowColor: "white",
  shadowBlur: 10,
};

let startPosition = {
  x: 0,
  y: getViewHeight(12.5),
};

let heightOfTxtBox = 100;
let updatedPosition;

if (window.innerHeight < 700) {
  heightOfTxtBox = 80;
} else if (window.innerHeight < 600) {
  heightOfTxtBox = 60;
} else if (window.innerHeight < 500) {
  heightOfTxtBox = 45;
}

document.querySelectorAll(".text").forEach((element) => {
  element.style.height = heightOfTxtBox + "px";
  element.style.width = heightOfTxtBox * 2 + "px";
});

updateResolution();
updateBoxesPosition();

c.lineWidth = configs.lineWidth;
c.strokeStyle = configs.color;
c.shadowBlur = configs.shadowBlur;
c.shadowColor = configs.shadowColor;

let animationInterval = setInterval(animateMyDrawing, 62.5);

/*--------------------------- Functions ---------------------------*/

function drawShape(alpha) {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.globalAlpha = alpha;

  updatedPosition = JSON.parse(JSON.stringify(startPosition));

  c.moveTo(startPosition.x, startPosition.y);

  updatedPosition.x = getViewWidth(80);
  drawLineToUpdatePosition();

  createRightTriangleFromCurrentPosition();

  updatedPosition.x = getViewWidth(20);
  drawLineToUpdatePosition();

  updatedPosition.x -= configs.length;
  updatedPosition.y += configs.length;
  drawLineToUpdatePosition();

  updatedPosition.x += configs.length;
  updatedPosition.y += configs.length;
  drawLineToUpdatePosition();

  updatedPosition.x = getViewWidth(80);
  drawLineToUpdatePosition();

  createRightTriangleFromCurrentPosition();

  updatedPosition.x = 0;
  drawLineToUpdatePosition();

  c.stroke();
}

function drawLineToUpdatePosition() {
  c.lineTo(updatedPosition.x, updatedPosition.y);
}

function updateResolution() {
  canvas.width = window.innerWidth;
  canvas.height = startPosition.y + configs.length * 6 + startPosition.y;
}

function getViewHeight(height) {
  return (height * window.innerHeight) / 100;
}

function getViewWidth(width) {
  return (width * window.innerWidth) / 100;
}

function animateMyDrawing() {
  if (alpha >= 0.85) {
    flag = true;
  }
  if (alpha < 0.5) {
    flag = false;
  }

  if (flag) {
    alpha -= 0.05;
  } else {
    alpha += 0.05;
  }
  drawShape(alpha);
}

function updateBoxesPosition() {
  for (let i = 1; i <= 4; i++) {
    let txtBox = document.querySelector(`#txt${i}`);
    txtBox.style.top =
      startPosition.y -
      heightOfTxtBox / 2 +
      2 * (i - 1) * configs.length -
      6 +
      "px";
    if (i % 2 == 0) {
      txtBox.style.right = getViewWidth(20) + 4 + "px";
    } else {
      txtBox.style.left = getViewWidth(20) + 4 + "px";
    }
  }
}

function createRightTriangleFromCurrentPosition() {
  updatedPosition.x += configs.length;
  updatedPosition.y += configs.length;
  drawLineToUpdatePosition();

  updatedPosition.x -= configs.length;
  updatedPosition.y += configs.length;
  drawLineToUpdatePosition();
}

function refresh() {
  location.reload();
}
