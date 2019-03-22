
/*
 * vec lager et "vektor-objekt" med x- og y-verdier
 * vi bruker vektorer både til å si hvor noe skal være (x/y-posisjon)
 * og til å si hvor stort noe ska være (bredde/lengde)
 */

function vec(x, y) {
  return {
    x: x,
    y: y
  };
}

// cellSize er størelsen til en celle
const cellSize = vec(32, 32);

// gameSize er størelsen til "brettet" i antall celler bredt/langt
const gameSize = vec(20, 20);

// vi henter canvas-elementet (se index.html), gjør det passe stort og sparker ting i gang så vi kan gjøre 2D-grafikk
const canvas = document.getElementById("canvas");
canvas.width = cellSize.x * gameSize.x;
canvas.height = cellSize.y * gameSize.y;
const canvasContext = canvas.getContext("2d");

// hjelpefunksjon for å tømme canvaset. fyller det med en gjennomsiktig sortfarge
function clear() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

// hjelpefunksjon for å tegne en celle
function drawCell(position) {
  canvasContext.fillRect(position.x * cellSize.x, position.y * cellSize.y, cellSize.x, cellSize.y);
}

// hjelpefunksjon for å tilfedlige tall
function random(minclusive, maxclusive) {
  return Math.floor(Math.random() * maxclusive) + minclusive;
}

// farger!
const colours = ["#000000", "#FF0000", "#00FF00", "#0000FF"];

/*
 * vi tegner litt ting!
 * merk bruk av setTimeout for å tegne nye ting senere...
 */
function update() {
  clear();
  colours.forEach(color => {
    canvasContext.fillStyle = color;
    drawCell(vec(random(0, gameSize.x), random(0, gameSize.y)));
  });
  setTimeout(update, 1000);
}

update();
