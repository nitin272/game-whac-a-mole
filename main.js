
const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreE1= document.querySelector('.score span')
let score = 0
let timerInterval; 
let timerValue = 60; 

const sound = new Audio("assets/smash.mp3")

function run() {
const i = Math.floor(Math.random() * holes.length)
const hole = holes[i]
   let timer = null

const img = document.createElement('img')
img.classList.add('mole')
img.src = 'assets/mole.png'
 img.addEventListener('click', () => {
    score += 1
    sound.play()
    scoreEl.textContent = score
    img.src = 'assets/mole-whacked.png'
    clearTimeout(timer)
    setTimeout(() => {
    hole.removeChild(img)
 run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

function startGame() {
    
    const timerDisplay = document.getElementById("timer");
    timerInterval = setInterval(function () {
        if (timerValue > 0) {
            timerValue--;
            timerDisplay.textContent = timerValue;
        } else {
            
            clearInterval(timerInterval);
            window.location.href = "gameover.html"; 
        }
    }, 1000);

    
    run();
}
function whackMole(img, hole) {
    score += 1;
    sound.play();
    scoreEl.textContent = score;
    localStorage.setItem("score",score);

    img.src = 'assets/mole-whacked.png';
    clearTimeout(hole.timer);

    setTimeout(() => {
        hole.removeChild(img);
        run();
    }, 500);
}
window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

window.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

startGame();
