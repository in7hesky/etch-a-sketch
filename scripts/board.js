export class Board {
    #columnCounter = 0
    #rowCounter = 0
    
    constructor(columns, rows) {
        this.board = document.createElement("div")
        this.board.classList.add("board")
        document.querySelector(".container").append(this.board)

        this.addColumns(columns)
        this.addRows(rows)
    }
    
    removeColumns(amount) {
        for (let i = 0; i < amount; i++) {
            this.board.lastChild.remove()
            this.#columnCounter--
        }
        return this.#columnCounter
    }
    
    removeRows(amount) {
        this.board.childNodes.forEach( column => {
            for (let i = 0; i < amount; i++) {
                column.lastChild.remove()
            }
        })
        this.#rowCounter -= amount
        return this.#rowCounter
    }

    addColumns(amount) {
        let column
        if (this.board.childNodes.length !== 0) {
            column = this.board.lastChild.cloneNode(true)
        } else {
            column = document.createElement("div")
            column.classList.add("column")
        }
        for (let i = 0; i < amount; i++) {
            this.#columnCounter++
            this.board.append(column.cloneNode(true))
        }
        return this.#columnCounter
    }

    addRows(amount) {
        document.querySelectorAll(".column").forEach( column => {
            for (let i = 0; i < amount; i++) {
                let row = document.createElement("div")
                row.classList.add("pixel")
                this.#rowCounter++
                column.append(row)
            }
        })
        return this.#rowCounter
    }
}