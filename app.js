let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns=["red", "purple", "blue", "yellow"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        started = true;
        console.log("Game started");

        levelup();
    }
});
function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 150);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 150);
}

function levelup() {
    level++;
    h2.innerText= `Level ${level}`; 
    
    let randomIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randomIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    console.log(randomIdx);
    console.log(randcolor);
    console.log(randbtn);
    gameFlash(randbtn);
}

function btnpress() {
    let  btn=this;
    console.log(btn);
    userFlash(this);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}