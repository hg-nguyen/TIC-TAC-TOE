// Call element by ID and class name
const playerText = document.getElementById('playerText');
const restartBtn = document.getElementById('resetBtn');
// Create an array from an "Array-Like object"
let boxes = Array.from(document.getElementsByClassName('box'));


// console.log(boxes);
const spaces = [];
const playCount = 0;
const playerO = "O";
const playerX = "X";
const tie = "Tie";
let currentPlayer = playerX
// Keep track of which block is clicked
// Create array of 9 spaces and fill them with NULL
let cells = Array(9).fill(null)
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
let drawIndicator = getComputedStyle(document.body).getPropertyValue('--draw-blocks');

// console.log(cells);

// Add event listener to each of the boxes
const playGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

// target each box by ID

function boxClicked(e) {
    const id = e.target.id
// if this index is equaled to null, continue //
    if(!cells[id]){
        // fill in boxes with x or o
        cells[id] = currentPlayer;
        e.target.innerText = currentPlayer;
// if player has won highlight three boxes with "has won msg" //
     } if(playerHasWon() !==false){
            playerText.innerHTML = (currentPlayer) + ' has won!';
            let winning_blocks = playerHasWon();
            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator);
            return
        }
        currentPlayer = currentPlayer === playerX ? playerO : playerX;

     if(playCount === 9) {
        playerText.innerHTML = 'Tie!';
        boxes.forEach(box => box.style.color = drawIndicator)
    }
}


    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];

    function playerHasWon() {
        for (const condition of winningCombos) {
            let [a, b, c] = condition
    
            if(cells[a] && (cells[a] == cells[b] && cells[a] == cells[c])) {
                return [a,b,c]
            }
        }
        return false
    }

const playerDraw = () => {
    let draw = 0;
    spaces.forEach((space, i) => {
        if (spaces[i] !== null) draw++;
    });

    if (draw === 9) {
    text.innerText = `Draw`;
    restart();
        }
      };


playGame()