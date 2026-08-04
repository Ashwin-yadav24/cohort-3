// const five = document.querySelector("#five")
// const main = document.querySelector("main");

// five.addEventListener('click',(event)=>{
//     console.log(event.target);

// })

// main.addEventListener('click',(e)=>{
//     console.log(e.target);
// })


// let random = Math.randon()
// Math.floor(random)
// console.log(random);




const main = document.querySelector("main");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer")
const  overlay = document.querySelector("#overlay")
const box = document.createElement("div");
const scoree =document.querySelector("#score");
const game = document.querySelector("#game");
box.classList.add('box')

let time = 0
let interval;
let score=0;
const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`

}
const randomBox = () => {
    box.style.backgroundColor = randomColor()
    game.append(box)

    let mainH = main.clientHeight - box.offsetHeight
    let mainW = main.clientWidth - box.offsetWidth

    const randomY = Math.random() * mainH;
    const randomX = Math.random() * mainW;

    box.style.top = `${randomY}px`
    box.style.left = `${randomX}px`
}

btn.addEventListener('click', () => {

    clearInterval(interval);
    time = 0;
    timer.textContent = time;
    randomBox();
    game.classList.remove("blur");
    overlay.style.display = "none";
    interval = setInterval(() => {
        randomBox();
        time += 1;
        timer.textContent = time;

    }, 1000);


    setTimeout(() => {
        clearInterval(interval);
        game.classList.add("blur");
        overlay.style.display="flex";
    }, 10000);
})

box.addEventListener('click',()=>{
    score+=1;
    scoree.textContent = score;

})

