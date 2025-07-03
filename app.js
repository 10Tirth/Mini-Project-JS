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
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
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
    btnFlash(randbtn);
}