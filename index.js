const container = document.querySelector('#container');
const btn1 = document.querySelector("#resize");
const btn2 = document.querySelector("#clear");
const btn3 = document.querySelector("#randomColor");

btn1.addEventListener('click', resize);    
btn2.addEventListener('click', clearArea);
btn3.addEventListener('click', randomColor);

// Starting 16x16 grid
makeGrid(16);

function resize() {
    const num = prompt('Please enter a number to change the size of the grid');
    makeGrid(num);
    
}

// Creating new divs
function makeGrid(num) {
    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);
    for (let i=0; i < (num * num); i++) {
        
        let newblock = document.createElement('div');
        newblock.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = '#32a89e';
        });
        newblock.classList.add('color-grid');
        container.appendChild(newblock);
    }

}

// Adding functionality to clear button
function clearArea() {
    container.textContent = "";
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    } makeGrid(16);
}

function randomColor() {
    
}


