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
let PIXEL_COLOR = "#FFFFFF"
let THRESHHOLD = 1000

// Canvas
var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

let WIDTH = canvas.width
let HEIGHT = canvas.height

// Background Fill
context.fillStyle = BG_COLOR
context.fillRect(0, 0, WIDTH, HEIGHT)

// Generate Mandelbrot Set
// Zn+1 = Zn + C
// Z0 = 0
// C is a complex number 
context.fillStyle = PIXEL_COLOR
for (var x = 0; x <= WIDTH; x++){
    for(var y = HEIGHT; y >= 0; y--){
        // TODO
        let centerX = x - (WIDTH / 2)
        let centerY = -y + (HEIGHT / 2)
        let cn = new ComplexNumber(centerX, centerY)
        cn.display() 
    }
}