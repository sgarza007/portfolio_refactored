function main(){
    let squares = $(".square");
    //assign a random RGB to each square
    setColor(squares);
    //pick an rgb to be the one to guess
    let correctRGB = $(squares[randomNum(6)]).css("backgroundColor");
    console.log(correctRGB);
    //check to see if they guessed the right RGB
    squares.on("click", function () {
        let clickedRGB = $(this).css("backgroundColor");
        //check to see if right one was guessed
        if(clickedRGB === correctRGB){
            //turn every square to the correct color
            squares.each(function(){
                $(this).css( "backgroundColor",correctRGB);
            });
            //change text to say play again?
        } else{
            //make the square disappear
            $(this).css( "backgroundColor","#2C3E50");
        }
    });
}

//sets color of squares
function setColor(squares){
    squares.each(function(){
        $(this).css( "backgroundColor",randomRGB());
    });
}

//create a random RGB generator
function randomRGB(){
    let r = randomNum(256);
    let g = randomNum(256);
    let b = randomNum(256);
    return "rgb("+r+", "+g+", "+b+")";
}

//return a randomNumber between 0 and 255
function randomNum(num){
    return Math.floor(Math.random()*num);
}