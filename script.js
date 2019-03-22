
function vec(x, y) {
  return {
    x: x,
    y: y
  };
}

const squareSize = vec(32, 32);
const gameSize = vec(20, 20);

const canvas = document.getElementById("canvas");
canvas.width = squareSize.x * gameSize.x;
canvas.height = squareSize.y * gameSize.y;

const canvasContext = canvas.getContext("2d");

function clear() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSquare(position) {
  canvasContext.fillRect(position.x * squareSize.x, position.y * squareSize.y, squareSize.x, squareSize.y);
}

function random(minclusive, maxclusive) {
  return Math.floor(Math.random() * maxclusive) + minclusive;
}

const colours = ["#000000", "#FF0000", "#00FF00", "#0000FF"];

function update() {
  clear();
  colours.forEach(color => {
    canvasContext.fillStyle = color;
    drawSquare(vec(random(0, gameSize.x), random(0, gameSize.y)));
  });
  setTimeout(update, 1000);
}

update();
