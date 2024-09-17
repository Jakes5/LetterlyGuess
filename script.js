let isgoing=false, clear, hr=0, min=0, sec=0, milli=0, all="0:00:00:00", go;
let randomDigit;
const outcome = document.querySelector(".display-outcome");
const count = document.createElement("div");
const startBtn = document.querySelector("#btn1");
const stopBtn = document.querySelector("#btn2");
const startMsg = document.querySelector(".start-message");
count.classList.add("counter");
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Oh World")
const keys =['KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyH', 'KeyI', 'KeyJ', 'KeyK', 'KeyL', 'KeyM', 'KeyN', 'KeyO', 'KeyP', 'KeyQ', 'KeyR', 'KeyS', 'KeyT', 'KeyU', 'KeyV', 'KeyW', 'KeyX', 'KeyY', 'KeyZ', 'Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Numpad0', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9'
];
console.log(keys);


function addZero(x)
{
    if (x<10)
    {
        return "0"+x;
    }
    else
    {
        return x;
    }
}


function addTime(){
    milli=milli+1;
    if (milli>=100)
    {
        sec=sec+1;
        milli=milli-100;
        if(sec>=60)
        {
            min=min+1;
            sec=sec-60;
            if(min>=60)
            {
                hr=hr+1;
                min=min-60;
            }
        }
    }
all=addZero(hr)+":"+addZero(min)+":"+addZero(sec)+":"+addZero(milli);
document.getElementById("timer").innerHTML=all;
}

function reset()
{
    hr=0, min=0, sec=0, milli=0, all="0:00:00:00";
    clearInterval(clear);
    clearInterval(go);
    isgoing=false;
    document.getElementById("timer").innerText=all;

}


function RandomAlpNo(){
        randomDigit = keys[Math.floor((Math.random()*46))];
        console.log(randomDigit);
        
        // outcome.textContent = randomDigit;
}

startBtn.addEventListener("click", () => {

    if(isgoing === false){
        clear = setInterval(RandomAlpNo, 1000);
        go=setInterval(addTime, 10);
        console.log(clear);
        isgoing=true;
        outcome.textContent = "";
        startMsg.classList.add("hide");
    } 
});

stopBtn.addEventListener("click", () => {
    isgoing=false;
    clearInterval(clear);
    console.log(clear);
    clearInterval(go);
    hr=0, min=0, sec=0, milli=0, all="0:00:00:00";
    document.getElementById("timer").innerText=all;
    outcome.textContent = "";
    startMsg.classList.remove("hide");
});

window.addEventListener("keydown", (e) =>{ 
    // console.log(e);
    
if(e.code === randomDigit){
    isgoing=false;
    clearInterval(clear);
    console.log(clear);
    // outcome.setAttribute("style", "width: 100%");
    outcome.textContent = `Way to go, you won on "${randomDigit}"`;
    clearInterval(go);
    // hr=0, min=0, sec=0, milli=0, all="0:00:00:00";
    // document.getElementById("timer").innerText=all;
} 
// else{
//     outcome.textContent = "Not that one"; 
//}
})