// 1. Khởi tạo board
const EMPTY = 0;
const HUMAN = 1;
const COMP = 2;
let currentPlayer = HUMAN;
function createEmptyBoard(board_size) {
    const board = [];
    for (let i = 0; i < board_size; i++) {
        board.push(Array(board_size).fill(EMPTY));
    }
    return board;
}

// 2. Tạo UX/UI cho bảng
function print_board(board) {
    const gameBoardElement = document.getElementById("board");
    const tbody = document.createElement("tbody");
    tbody.innerHTML = "";

    for (let row = 0; row < board.length; row++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row";

        for (let col = 0; col < board[row].length; col++) {
            const cellElement = document.createElement("div");
            cellElement.className = "cell";
            cellElement.dataset.colIndex = col;
            cellElement.dataset.rowIndex = row;
            rowElement.appendChild(cellElement);
        }

        tbody.appendChild(rowElement);
    }

    gameBoardElement.appendChild(tbody);

    // add event listener
    tbody.addEventListener("click", () => {
        const clickedCell = event.target;

        if (clickedCell.className === "cell") {
            if (currentPlayer === HUMAN) {
                const { x, y } = getPosition(clickedCell);
                XorO(board, clickedCell, x, y);
                checkWin(board, { x, y }, HUMAN);
            }
            if (currentPlayer == COMP) {
                let { y, x } = CompMove(board);
                const compCell = tbody.childNodes[y].childNodes[x];

                XorO(board, compCell, x, y);
            }
        }
    });
}

// get X,Y of clicked position in HTML
function getPosition(clickedCell) {
    let y = clickedCell.dataset.rowIndex;
    let x = clickedCell.dataset.colIndex;
    return { x, y };
}

// determine player or comp
function XorO(board, clickedCell, x, y) {
    if (board[y][x] === EMPTY) {
        switch (currentPlayer) {
            case HUMAN:
                board[y][x] = 1;
                clickedCell.innerHTML = "X";
                currentPlayer = COMP;
                break;
            case COMP:
                board[y][x] = 2;
                clickedCell.innerHTML = "O";
                currentPlayer = HUMAN;
                break;
            default:
                break;
        }
    } else {
        return;
    }
}

// 3. AI move và thuật toán minimax
function CompMove(board) {
    // Tính điểm cho bảng và lưu lại best move cho máy
    let bestScore = -Infinity;
    let bestMove;
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board.length; x++) {
            if (board[y][x] == EMPTY) {
                board[y][x] = COMP;
                let score = minimax(board);
                board[y][x] = EMPTY;
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { y, x };
                }
            }
        }
    }
    return bestMove;
}
// Check winner
function checkWin(board, { x, y }, currentTurn) {
    let count = 0;

    const directions = [
        [1, 0],
        [0, 1],
        [1, 1],
        [1, -1],
    ];

    for (const [dx, dy] of directions) {
        console.log("🚀 ~ file: index.js:118 ~ checkWin ~ [dx, dy]:", [dx, dy])
        for (let i = -4; i <= 4; i++) {
            let tempX = parseInt(x) + i * dx;
            let tempY = parseInt(y) + i * dy;
            if (count === 3) {
                alert(`${currentTurn} win`);
            }
            if (isValidPosition(tempX, tempY, board.length)) {
                console.log("🚀 ~ file: index.js:127 ~ checkWin ~ board[tempY][tempX] :", board[tempY][tempX] )
                console.log("🚀 ~ file: index.js:127 ~ checkWin ~ tempX:", tempX)
                console.log("🚀 ~ file: index.js:127 ~ checkWin ~ tempY:", tempY)
                if (board[tempY][tempX] === currentTurn) {
                    count++;
                    console.log(
                        "🚀 ~ file: index.js:125 ~ checkWin ~ count:",
                        count
                    );
                } else {
                    count = 0;
                }
            }
        }
    }
}

// check position có valid không
function isValidPosition(tempX, tempY, length) {
    return tempX >= 0 && tempX < length && tempY >= 0 && tempY < length;
}

// Thuật toán minimax
function minimax(board) {
    return 1;
}

// Start here ----> Hàm chính để chạy trò chơi: main()
function play_caro(board_size) {
    // 1. Khởi tạo board
    const board = createEmptyBoard(board_size);

    print_board(board);
}

play_caro(3);
