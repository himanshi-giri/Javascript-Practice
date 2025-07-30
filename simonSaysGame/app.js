let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", ()=>{
    if(started === false){
        console.log("Game started");
        started = true;
        levelUp();
    }

});

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(()=>{
    btn.classList.remove("flash");
   },250);
}
function userFlash(btn){
   btn.classList.add("userflash");
   setTimeout(()=>{
    btn.classList.remove("userflash");
   },250);
}

function levelUp(){
    userSeq= [];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn choose
    let randInd = Math.floor(Math.random()*4);
    let randClr = btns[randInd];
    
    let randBtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    gameFlash(randBtn);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level=0;
}

function checkAns(idx){
    //console.log(`current level : ${level}`);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over, Your score is <b>${level}</b> <br>Press any key to again start the game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },150);

        reset();
    
    }
}
function btnPressed(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}

