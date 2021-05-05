import {Game} from "./game.js"

    let game = undefined;
    let gameName = document.getElementById("game-name");

    function updateUI() {
        let boardHolder = document.getElementById("board-holder");
        if (game === undefined) {
            boardHolder.setAttribute("class", "is-invisible")
        }
        if (game !== undefined) {
            boardHolder.removeAttribute("is-invisibile");
            gameName.innerHTML = game.whoIs();
        }
    }

window.addEventListener('DOMContentLoaded', event => {

    const newGameButton = document.getElementById('new-game');
    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');
    const clickTarget = document.getElementById("click-targets");

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
        console.log(currentPlayer.value)
    });











})
// Future problems for after lunch Andru and after lunch Pierre.
