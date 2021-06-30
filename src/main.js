// Constants
let BG_COLOR = "#000000"
let PIXEL_COLOR = "#FFFFFF"
let BOUNDARY = 1000
let ITERATIONS = 100
let FRACTAL_WIDTH = 4
let FRACTAL_HEIGHT = 4

// Additional variables
var step = 0.005

// Canvas
var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

// Controls
let sizeControl
let resolutionControl

// On Load
window.onload = function(){
    sizeControl = document.getElementById("size")
    sizeControl.value = canvas.width
    sizeControl.onchange = function(){
        canvas.width = sizeControl.value
        canvas.height = sizeControl.value
        
        generateMandelbrotSet()
    }

    resolutionControl = document.getElementById("resolution")
    resolutionControl.value = 5
    resolutionControl.onchange = function(){
        step = resolutionControl.value * 0.001

        generateMandelbrotSet()
    }

    generateMandelbrotSet()
}


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

// Generate Mandelbrot Set
// Zn+1 = (Zn)^2 + C
// Z0 = 0
// C is a complex number 
function generateMandelbrotSet(){
    
    // Background Fill
    context.fillStyle = BG_COLOR
    context.fillRect(0, 0, canvas.width, canvas.height)

    // Plot points
    context.fillStyle = PIXEL_COLOR
    for(var x = -FRACTAL_WIDTH / 2; x < FRACTAL_WIDTH / 2; x += step){
        for(var y = -FRACTAL_HEIGHT / 2; y < FRACTAL_HEIGHT / 2; y += step){
            let coordX = (x / FRACTAL_WIDTH + 0.5) * canvas.width
            let coordY = -(y / FRACTAL_HEIGHT - 0.5) * canvas.height
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
}
