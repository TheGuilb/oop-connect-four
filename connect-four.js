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
    }

    // console.log(Game);
    // console.log(game);
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
        game.playInColumn();
        // console.log(currentPlayer.value)
        updateUI();
    });











})
// Future problems for after lunch Andru and after lunch Pierre.
