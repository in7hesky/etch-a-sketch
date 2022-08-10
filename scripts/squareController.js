import {Pen} from "./pen.js";

export class SquareController {
    constructor(board) {
        this.board = board
        this.pen = new Pen()

        this.#bindEraser()
        this.#bindSlider()
        this.#bindClear()
    }

    changeResolution(value) {
        this.board.setResolution(value)
        this.pen.bindDraw()
        this.pen.updateColor()
        this.#updateResolutionView(this.board.getResolutionCounter())
    }

    #bindEraser() {
        document.querySelector(".eraser")
            .addEventListener("click", (e) => {
                this.pen.toggleEraser()
                e.target.classList.toggle("picked")
            })
    }

    #bindClear() {
        document.querySelector(".clear")
            .addEventListener("click", () => {
                this.changeResolution(this.board.getResolutionCounter())
            })
    }

    #bindSlider() {
        document.querySelector(".slider")
            .addEventListener("input", (e) => {
            this.changeResolution(e.target.value)
        })
    }
    
    #updateResolutionView(current) {
        document.querySelectorAll(".resolution > span").forEach(num => {
            num.textContent = current
        })
            
    }
}