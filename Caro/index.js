// 1. Khởi tạo board
function createEmptyBoard(board_size) {
    const board = [];
    for (let i = 0; i < board_size; i++) {
        board.push(Array(board_size).fill(""));
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
            cellElement.textContent = board[row][col];
            rowElement.appendChild(cellElement);
        }

        tbody.appendChild(rowElement);
    }

    gameBoardElement.appendChild(tbody)
}

// Start here ----> Hàm chính để chạy trò chơi: main()
function play_caro(board_size) {
    // 1. Khởi tạo board
    const board = createEmptyBoard(board_size);
    const board_heigth = board.length;
    const board_width = board[0].length;

    print_board(board);
}

play_caro(5);
