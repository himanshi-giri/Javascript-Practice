let body = document.querySelector("body");

let stickMan = document.getElementById("player");
let ball = document.getElementById("ball");
let goalPost = document.getElementById("goal");

let position = {
  x: 0,
  y: 0,
};
let ballMovement = { x: 0, y: 0 };
let isBallMoving = false;
let interval = null;

document.addEventListener("keydown", (e) => {
  let steps = 10;
  console.dir(e);
  if (e.key == "ArrowRight" || e.key == "k") {
    position.x += steps;
    //console.log("Right arrow pressed");
  } else if (e.key == "ArrowLeft" || e.key == "s") {
    position.x -= steps;
    //console.log("left arrow pressed");
  } else if (e.key == "ArrowUp" || e.key == "y") {
    position.y -= steps;
    //console.log("up arrow pressed");
  } else if (e.key == "ArrowDown" || e.key == "b") {
    position.y += steps;
    //console.log("down arrow pressed");
  } else {
    alert("Please press arrow keys to move tthe StickMan !!");
  }

  stickMan.setAttribute("transform", `translate(${position.x},${position.y})`);

  checkCollision();
});

function checkCollision() {
  let ballX = parseFloat(ball.getAttribute("cx")) + ballMovement.x;
  let ballY = parseFloat(ball.getAttribute("cy")) + ballMovement.y;

  let playerX = 50 + position.x; // Stickman’s head cx is 50
  let playerY = 50 + position.y;

  let dx = ballX - playerX;
  let dy = ballY - playerY;

  let distance = Math.sqrt(dx * dx + dy * dy);

  if (ballX >= 1150) {
    clearInterval(interval);
    isBallMoving = false;
    alert("Goal! Ball reached the goalpost!");
    return;
  }

  if (distance < 70 && !isBallMoving) {
    isBallMoving = true;

    let move = 20;
    let stepsToMove = 5; // Move ball 5 steps (50 pixels total)
    let stepsMoved = 0;
    // Clear any existing interval to prevent overlap
    clearInterval(interval);
    interval = setInterval(() => {
      if (stepsMoved < stepsToMove && ballX + ballMovement.x < 2100) {
        ballMovement.x += move;
        ball.setAttribute("transform", `translate(${ballMovement.x},${ballMovement.y})`);
        stepsMoved++;
      } else {
        // Stop after moving the desired steps or hitting goalpost
        clearInterval(interval);
        isBallMoving = false;
      }
    }, 50);
  }
}
