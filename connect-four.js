import {Game} from "./game.js"

    let game = undefined;

window.addEventListener('DOMContentLoaded', event => {

    const newGameButton = document.getElementById('new-game');
    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');

    function whoIs(player) {
        player.addEventListener('keyup', event => {
            if (player1.value && player2.value) {
                newGameButton.disabled = false;
            }
        })
    }

    whoIs(player1)
    whoIs(player2)

    newGameButton.addEventListener('click', event => {
        game = new Game(player1.value, player2.value);




    })











})
