var numSquares = 6;
//apoi am scimbat var colors = generateRandomColors(6); cu
var colors = generateRandomColors(numSquares);
   
//var colors =[
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)"
//] am schimbat cu functia generateRandomColors(6); 6 ca argument pt 6 culori

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1"); //o folosesc mai jos 
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
          squares[i].style.background = colors[i];   
        }else{
            squares[i].style.display = "none";
        }
    }
    
    
});
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i = 0; i<squares.length; i++){
        
          squares[i].style.background = colors[i];   
            squares[i].style.display = "block"; 
        }
});

resetButton.addEventListener("click", function(){
//generate all new colors
    
    colors = generateRandomColors(numSquares);
    
    //pick a new random color from array
    pickedColor = pickColor();
    
    //change colordisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    
   // resetButton.textContent = "New Colors"; this keyword tine locul la resetButton
    this.textContent = "New Colors";
    
    messageDisplay.textContent = " ";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    
    squares[i].style.background = colors[i];
    }
   h1.style.background = "steelblue"; 
});
//am schimbat var pickedColor = colors[3];  cu var pickedColor = pickColor(); pt. a ne reda culorile la intamplare

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    
    squares[i].style.background = colors[i];
    
    //add click listeners to squares
    
    squares[i].addEventListener("click", function(){
    // grab color of clicked square
        var clickedColor = this.style.background;
    // compare color to pickedColor
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
        
        
    });
}



    function changeColors(color){
        //loop through all squares
        for (var i = 0; i < squares.length; i++){
            //change each color to match given color
            squares[i].style.background = color;
        }
    }

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num to arr aceasta este defapt //repeat num times
    //repeat num times
    for (var i = 0; i < num; i++){
        //get random colors and push into arr
        arr.push(randomColor());
    }
    //return  that arr
    return arr;
}

function randomColor(){
  //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
   var b = Math.floor(Math.random() * 256);
    //"rgb ('r,g,b)" astai stringul ce trebuie sa ni-l arate in h1
    
    //return "rgb(" + r + ", " + g + ", " + b + " )";
    return "rgb(" + r + ", " + g + ", " + b + ")";
}





