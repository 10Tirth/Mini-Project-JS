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
    userSeq=[]
    level++;
    h2.innerText= `Level ${level}`; 
    
    let randomIdx=Math.floor(Math.random() * btns.length);
    let randcolor=btns[randomIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    gameFlash(randbtn);
}

function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML=`Game Over ! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="#dc84aa";
        },150);
        reset();
    }
}

function btnpress() {
    let  btn=this;
    userFlash(this);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    check(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset() {
    gameSeq = [];
    userSeq = [];

    started = false;
    level = 0;
}