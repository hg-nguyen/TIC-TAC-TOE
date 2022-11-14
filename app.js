const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// Call element by ID and class name
let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('resetBtn')

// Create an array from an "Array-Like object"
let boxes = Array.from(document.getElementsByClassName('box'))

const playerO = "O";
const playerX = "X";
let currentPlayer = playerX;

// Create array of 9 spaces and fill them with NULL
let cells = Array(9).fill(null);
let countPlay = 0;

// Add event listener to each of the boxes
function playGame() {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

// target each box by ID
function boxClicked(e) {
    const id = e.target.id
// if this index is null, fill in space with X or O
    if(cells!=[id] && countPlay < 9){
        cells[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(winGame() !==false){
            playerText.innerHTML = (currentPlayer) + ' has won!';
            let winningLines = winGame();
            countPlay = 10;
            winningLines.map(box => boxes[box].style.backgroundColor="purple");
            return;
        }
        countPlay++

//if current player is equal to playerX change it to playerO or elese change it to playerX
        currentPlayer = currentPlayer == playerX ? playerO : playerX;
    }
    if (countPlay === 9){
        playerText.innerHTML = 'Draw!';
    }
}


function winGame() {
// loop over winning combination lines.  
    for (const condition of winningPatterns) {
        let [a, b, c] = condition
// Check if A is the same as B, C, otherwise it will return invalid
        if(cells[a] && (cells[a] == cells[b] && cells[a] == cells[c])) {
            return [a,b,c]
        }
    }
    return false;
}

playGame()