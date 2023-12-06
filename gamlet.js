/*Gamelet : a starting point for writing games
Author:Alexander Markstrom
version 1.0
Instructions:
Include gamelet with detect when the left or right arrow
key is pressed and will move the ball element
accordingly.

*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); //update the ball's position
}
function refresh() {
  ball.style.left = position + "px";
}
