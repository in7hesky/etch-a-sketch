export class Controller {
    constructor(board) {
        this.board = board
    }

    plusColumn() {return this.board.addColumns(1)}

    minusColumn() {return this.board.removeColumns(1)}

    plusRow() {return this.board.addRows(1)}

    minusRow() {return this.board.removeRows(1)}
}