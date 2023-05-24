const gameboard = document.getElementById('gameboard')

const info = document.getElementById('info')

const startCells = [
    "", "", "", "",  "", "", "", "", ""
]

function createBoard(){
    startCells.forEach((celll, index) =>{
    const cellElement = document.createElement('div')
    cellElement.classList.add('square')
   })
}