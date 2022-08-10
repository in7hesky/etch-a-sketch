export class Board {
    #resolutionCounter = 0
    
    constructor(resolution = 16) {
        this.createBoard()
        this.setResolution(resolution)
    }
    
    getResolutionCounter() {return this.#resolutionCounter}


    setResolution(amount) {
        if (this.board.childNodes.length !== 0) {
            this.board.remove()
            this.createBoard()
        }
        let column = document.createElement("div")
        column.classList.add("column")

        let pixel = document.createElement("div")
        pixel.classList.add("pixel")

        for (let i = 0; i < amount; i++) {
            column.append(pixel.cloneNode())
        }

        for (let i = 0; i < amount; i++) {
            this.board.append(column.cloneNode(true))
        }

        this.#resolutionCounter = amount
    }

    createBoard() {
        this.board = document.createElement("div")
        this.board.classList.add("board")
        document.querySelector(".container").append(this.board)
    }
}