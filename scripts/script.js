import {Board} from "./board.js";
import {Controller} from "./controller.js";

const INIT_COLUMNS = 16
const INIT_ROWS = 16

const controller = new Controller(new Board(INIT_COLUMNS, INIT_ROWS))

initButtons()

function initButtons() {
    document.querySelector(".column-buttons > .minus")
        .addEventListener("click", () => {
            controller.minusColumn()
        })
    document.querySelector(".column-buttons > .plus")
        .addEventListener("click", () => {
            controller.plusColumn()
        })
    
    document.querySelector(".row-buttons > .minus")
        .addEventListener("click", () => {
            controller.minusRow()
        })
    document.querySelector(".row-buttons > .plus")
        .addEventListener("click", () => {
            controller.plusRow()
        })
}