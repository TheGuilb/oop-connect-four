import {Game} from "./game.js"

    let game = undefined;
    let gameName = document.getElementById("game-name");
    const clickTarget = document.getElementById("click-targets");

    function updateUI() {
        let boardHolder = document.getElementById("board-holder");
        if (game === undefined) {
            boardHolder.setAttribute("class", "is-invisible")
        } else {
            boardHolder.classList.remove("is-invisible");
            gameName.innerHTML = game.getName();
        }
            if (game.currentPlayer === 1) {
                clickTarget.removeAttribute("red");
                clickTarget.setAttribute("class", "black");
            } else {
                clickTarget.removeAttribute("black");
                clickTarget.setAttribute("class", "red");
            }

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                let boxSquare = document.getElementById(`square-${i}-${j}`);
                let tokeN = game.getTokenAtCol(i, j);
                console.log(tokeN, "<----- this is tokeN");
                boxSquare.innerHTML = "";
                if (tokeN === 1) {
                    let blackDiv = document.createElement("div");
                    blackDiv.classList.add("token", "black");
                    boxSquare.appendChild(blackDiv);

                } else if (tokeN === 2) {
                    let redDiv = document.createElement("div");
                    redDiv.classList.add("token", "red");
                    boxSquare.appendChild(redDiv);

                }
            }
        }
    }

    window.addEventListener('DOMContentLoaded', event => {


    const newGameButton = document.getElementById('new-game');
    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');


    function whoIs(player) {
        player.addEventListener('keyup', event => {
            if (player1.value && player2.value) {
                newGameButton.disabled = false;
            }
        });
    }

    whoIs(player1);
    whoIs(player2);

    newGameButton.addEventListener('click', event => {
        game = new Game(player1.value, player2.value);
        player1.value = "", player2.value = "";
        newGameButton.disabled =  true;

        updateUI();
    });

    clickTarget.addEventListener("click", event => {
            const targetId = event.target.id;
        if (targetId.startsWith('column-')) {
            let targetNum = Number.parseInt(targetId[targetId.length -1]);
                game.playInColumn(targetNum);
            }
            updateUI();
    });
})
