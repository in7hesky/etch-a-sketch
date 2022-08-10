import {Pen} from "./pen.js";

export class SquareController {
    constructor(board) {
        this.board = board
        this.pen = new Pen()
    }

    changeResolution(value) {
        let initialCounter = this.board.getColumnCounter()
        if (value > initialCounter) {
            this.board.addColumns(value - initialCounter)
            this.board.addRows(value - initialCounter)
        } else if (value < initialCounter) {
            this.board.removeColumns(initialCounter - value)
            this.board.removeRows(initialCounter - value)
        }
        
        this.#updateResolutionView(this.board.getColumnCounter())
    }
    
    #updateResolutionView(current) {
        document.querySelectorAll(".resolution > span").forEach(num => {
            num.textContent = current
        })
            
    }
}