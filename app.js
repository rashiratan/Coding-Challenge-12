//task 2

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
//task 4
const clearCanvas = document.getElementById('clearCanvas');
const colorPicker = document.getElementById('colorPicker');

//creating function to reset canvas
function resetCanvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

resetCanvas(); //initiliazing reset canvas function

let currentTool = 'line';
let startX;
let startY;
let currentY;
let currentX;
let isDrawing = false;

//setting variable to identify current tool
document.querySelectorAll('.tool').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        currentTool = event.target.value;
    })
})

//setting up functions for each tool
function drawLine(x, y, a, b) {
    ctx.beginPath();
    ctx.strokeStyle = colorPicker.value; //using colorpicker to set color for drawing
    ctx.lineWidth = 2;
    ctx.moveTo(x,y);
    ctx.lineTo(a,b);
    ctx.stroke();
}

function drawRectangle(x,y, a, b){
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 2;
    width = a-x;
    height = b-y;
    ctx.strokeRect(x, y, width, height);
}

function drawCircle (x, y, a, b) {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow(a-x, 2) + Math.pow(b-y, 2)); //using circle formula to find radius from coordinates
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 2;
    ctx.stroke();
}
 
 
 canvas.addEventListener('mousedown', event => { //beginning the drawing
     isDrawing = true;
     startX = event.offsetX;
     startY = event.offsetY;
 })
 

 canvas.addEventListener('mouseup', event =>
    //drawing on mouseup to ensure that the draw where the mouse button is lifted up
 {  //finding the second set of coordinates
     currentX = event.offsetX;
     currentY = event.offsetY;
   //task 3
     if(isDrawing === true) {
        if(currentTool === 'line') { //executing drawing based on selected tool
            drawLine(startX, startY, currentX, currentY);
        }
        else if (currentTool === 'rectangle') {
            drawRectangle(startX, startY, currentX, currentY);
        }
        else if (currentTool === 'circle') {
            drawCircle(startX, startY, currentX, currentY)
        }
    }
 
     isDrawing = false; //ending the drawing
 }
 )
 
 //task 4

//setting up the clear canvas button
 clearCanvas.addEventListener('click', () => {
    resetCanvas();
 })
 