import {Pen} from "./pen.js";

export class SquareController {
    constructor(board) {
        this.board = board
        this.pen = new Pen()
    }

    changeResolution(value) {
        this.board.setResolution(value)
        this.pen.bindDraw()
        this.pen.updateColor()
        this.#updateResolutionView(this.board.getResolutionCounter())
    }
    
    #updateResolutionView(current) {
        document.querySelectorAll(".resolution > span").forEach(num => {
            num.textContent = current
        })
            
    }
}