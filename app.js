//select the grid element
const grid = document.querySelector('#grid');

//build a grid of num * num elements
function createGrid() {
    let num = prompt("What grid size do you want?");
    for (let i = 0; i < Math.pow(num, 2); i++) {
        let cell = document.createElement('cell');
        cell.classList.add('cell');
        cell.setAttribute("id", i)
        grid.appendChild(cell);
    }
    grid.style.gridTemplateColumns = "repeat("+num+", 1fr)";
    grid.style.gridTemplateRows = "repeat("+num+", 1fr)";
}

//produces a black color for cells that you hover over
window.addEventListener('mouseover', function (e) {
    const cell = document.querySelector(`cell[id="${e.fromElement.id}"]`);
    cell.classList.add('sketched');
});


//select the clear field element
const clear = document.querySelector('.clear')

//clears every black background to white
function removeClass () {
    var elements = document.getElementsByClassName('sketched');
    while (elements.length)
        elements[0].classList.remove('sketched')};
        
// links clear field button to removeClass function
clear.addEventListener('click', removeClass)

//
function removeGrid () {
    var grid = document.getElementById('grid');
    while (grid.hasChildNodes() ) {
        grid.removeChild(grid.lastChild);
    }
}

//
function restart () {
    removeGrid();
    createGrid();
}

//select the new sketch pad field
const start = document.querySelector('.start')

//
start.addEventListener('click', restart)


