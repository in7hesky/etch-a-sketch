export class Pen {
    #mouseDown = false
    #isEraser = false
    
    constructor() {
        this.palette = document.querySelector(".palette")
        this.trigger = document.querySelector(".trigger")
        this.color = this.palette.getAttribute("value")
        
        this.#bindTrigger()
        this.#bindColor()
        this.bindDraw()
        this.updateColor()
    }

    toggleEraser() {
        this.#isEraser = !this.#isEraser
    }

    updateColor() {
        this.trigger.style.backgroundColor = this.color
    }
    
    bindDraw() {
        document.addEventListener("mousedown", () => {
           this.#mouseDown = true
        })
        document.addEventListener("mouseup", () => {
           this.#mouseDown = false
        })
        document.querySelectorAll(".pixel").forEach( pixel => {
            pixel.addEventListener("mouseover", (e) => {
                if(!this.#mouseDown) return
                e.target.style.backgroundColor = this.#isEraser ? "transparent" : this.color;
            })
        })
    }
    
    #bindColor() {
        this.palette.addEventListener("input", (e) => {
            this.color = e.target.value
            this.updateColor()
        })
    }
    
    #bindTrigger() {
        this.trigger.addEventListener("click", () => {
            this.palette.click()
        })
    }
}