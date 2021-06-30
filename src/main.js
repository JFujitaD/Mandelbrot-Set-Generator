class ComplexNumber {

    constructor(real, imaginary){
        this.real = real
        this.imaginary = imaginary
    }

    add(complexNum){
        this.real = this.real + complexNum.real
        this.imaginary = this.imaginary + complexNum.imaginary
    }

    square(){
        var real = (this.real * this.real) - (this.imaginary * this.imaginary)
        var imaginary = (this.real * this.imaginary) + (this.imaginary * this.real)
        
        this.real = real
        this.imaginary = imaginary
    }

    zero(){
        this.real = 0
        this.imaginary = 0
    }

    display(){
        var string

        if(this.imaginary >= 0)
            string = `${this.real} + ${this.imaginary}i`
        else
            string = `${this.real} - ${-this.imaginary}i`

        console.log(string)
    }
}

console.log("Running main.js")

// Constants
let BG_COLOR = "#000000"
let PIXEL_COLOR = "#FF0000"
let STEP = 0.005
let BOUNDARY = 3
let ITERATIONS = 100
let FRACTAL_WIDTH = 4
let FRACTAL_HEIGHT = 4

// Canvas
var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

let CANVAS_WIDTH = canvas.width
let CANVAS_HEIGHT = canvas.height

// Background Fill
context.fillStyle = BG_COLOR
context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

// Generate Mandelbrot Set
// Zn+1 = (Zn)^2 + C
// Z0 = 0
// C is a complex number 
context.fillStyle = PIXEL_COLOR
for(var x = -FRACTAL_WIDTH / 2; x < FRACTAL_WIDTH / 2; x += STEP){
    for(var y = -FRACTAL_HEIGHT / 2; y < FRACTAL_HEIGHT / 2; y += STEP){
        let coordX = (x / FRACTAL_WIDTH + 0.5) * CANVAS_WIDTH
        let coordY = -(y / FRACTAL_HEIGHT - 0.5) * CANVAS_HEIGHT
        let c = new ComplexNumber(x, y)
        let z = new ComplexNumber(0, 0)

        for(var i = 0; i < ITERATIONS; i++){
            z.square()
            z.add(c)
        }
        if(Math.abs(z.real) < BOUNDARY && Math.abs(z.imaginary) < BOUNDARY){
            context.fillRect(coordX, coordY, 1, 1)
        }
    }
}

console.log("Finished running main.js")