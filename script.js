let isgoing=false, clear;
let randomDigit;
const outcome = document.querySelector(".display-outcome");
const count = document.createElement("div");
const startBtn = document.querySelector("#btn1");
const stopBtn = document.querySelector("#btn2");
count.classList.add("counter");
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Oh World")
const keys ='abcdefghijklmnopqrstuvwxyz'.split('');
console.log(keys);

function RandomAlpNo(){
        randomDigit = keys[Math.floor((Math.random()*26))];
        console.log(randomDigit);
        
        outcome.textContent = randomDigit;
}

startBtn.addEventListener("click", () => {

    if(isgoing === false){
        clear = setInterval(RandomAlpNo, 1000)
        isgoing=true;
    } 
});

stopBtn.addEventListener("click", () => {
    isgoing=false;
    clearInterval(clear);
    console.log(clear);
});

window.addEventListener("keydown", (e) =>{ 
    
if(e.key === randomDigit){
    isgoing=false;
    clearInterval(clear);
    console.log(clear);
    outcome.textContent = "You won!";
} else{
    outcome.textContent = "Not that one"; 
}
})