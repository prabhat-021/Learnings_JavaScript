const container = document.getElementById("game_container");
const reset = document.getElementById("reset");

let hash = {}
let chance = true;
let filled = 0;

container.addEventListener("click", (e) => {
    const dataIndex = e.target.dataset.index
    if (dataIndex) {
        // const [row, col] = dataIndex.split("-").map((num) => parseInt(num));

        if (!hash[dataIndex]) {
            if (chance) {

                hash[dataIndex] = "X"
                e.target.classList.add("cell_WithX");

            } else {

                hash[dataIndex] = "O";
                e.target.classList.add("cell_WithO");

            }

            chance = !chance;
            filled++;

            let result = checkWin();
            if (filled === 9 || result.includes("Win")) {
                document.getElementById("won").textContent = result;
                container.style.pointerEvents = "none";
            }
        }
    }
});

function checkWin() {
    //row
    for (let i = 0; i < 3; i++) {
        let set = new Set();
        let player = "";
        for (let j = 0; j < 3; j++) {
            let key = `${i}-${j}`;
            set.add(hash[key]);
            player = hash[key];
        }

        if (set.size == 1 && player) {
            return `Player ${player} Win`;
        }
    }

    //col
    for (let j = 0; j < 3; j++) {
        let set = new Set();
        let player = "";
        for (let i = 0; i < 3; i++) {
            let key = `${i}-${j}`;
            set.add(hash[key]);
            player = hash[key];
        }

        if (set.size == 1 && player) {
            return `Player ${player} Win`;
        }
    }

    // diagonal
    let i = 0,
        j = 0;
    let set = new Set();
    let player = "";
    while (i < 3 && j < 3) {
        let key = `${i}-${j}`;
        set.add(hash[key]);
        player = hash[key];
        i++;
        j++;
    }

    if (set.size == 1 && player) {
        return `Player ${player} Win`;
    }

    // anti-daiagonal
    (i = 0), (j = 2);
    set.clear();
    while (i < 3 && j >= 0) {
        let key = `${i}-${j}`;
        set.add(hash[key]);
        player = hash[key];
        i++;
        j--;
    }

    if (set.size == 1 && player) {
        return `Player ${player} Win`;
    }

    return "Match draw";
}


reset.addEventListener("click", function (e) {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((val) => {
        if (val.classList.contains("cell-withX")) {
            val.classList.remove("cell-withX");
        } else {
            val.classList.remove("cell-withO");
        }
    });

    hash = {};
    filled = 0;
    chance = true;
    document.getElementById("won").textContent = "";
    container.style.pointerEvents = "auto";
});