import {Board} from "./board.js";
import {SquareController} from "./squareController.js";

const INIT_COLUMNS = 16
const INIT_ROWS = 16

const controller = new SquareController(new Board(INIT_COLUMNS, INIT_ROWS))

initButtons()

function initButtons() {
    document.querySelector(".slider").addEventListener("input", (e) => {
        controller.changeResolution(e.target.value)
    })
}
