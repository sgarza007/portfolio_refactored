function rgbMain(){
    let squares = $(".square");
    let rgbMessage = $("#rgbMessage");
    let newColorsBtn = $("#newColors");
    let easyBtn = $("#rgbEasy");
    let hardBtn = $("#rgbHard");
    let numOfSquares = 6;

    //assign a random RGB to each square
    setColor(squares);

    //pick an rgb to be the one to guess
    let correctRGB = pickRGB(squares, numOfSquares);
    $("#rgbDisplay").text(correctRGB.toUpperCase());

    //add event listener on New Colors btn
    newColorsBtn.on("click",function(){
        setColor(squares);
        correctRGB = pickRGB(squares, numOfSquares);
        $("#rgbDisplay").text(correctRGB.toUpperCase());
        $(this).text("New Colors");
        rgbMessage.text("");
    });

    //event listener for easy and hard mode
    easyBtn.on("click",function(){
        numOfSquares = 3;
        $(this).addClass("active");
        hardBtn.removeClass("active");
        setColor(squares);
        correctRGB = pickRGB(squares, numOfSquares);
        $("#rgbDisplay").text(correctRGB.toUpperCase());
        //make bottom squares disappear
        $("#bottomThree").css("display","none");
        rgbMessage.text("");
    });
    hardBtn.on("click",function(){
        numOfSquares = 6;
        setColor(squares);
        $(this).addClass("active");
        easyBtn.removeClass("active");
        correctRGB = pickRGB(squares, numOfSquares);
        $("#rgbDisplay").text(correctRGB.toUpperCase());
        //make bottom squares appear
        $("#bottomThree").css("display","block");
        rgbMessage.text("");
    });

    //event listener to check if they guessed the right RGB
    squares.on("click", function () {
        let clickedRGB = $(this).css("backgroundColor");
        //check to see if right one was guessed
        if(clickedRGB === correctRGB){
            //turn every square to the correct color
            squares.each(function(){
                $(this).css("backgroundColor",correctRGB);
                rgbMessage.text("YOU GOT IT!!");
                newColorsBtn.text("Play Again?");
            });
        } else{
            //make the square disappear
            $(this).css( "backgroundColor","#2C3E50");
            rgbMessage.text("Try Again!");
        }
    });
}

function start(){

}

//sets color of squares
function setColor(squares){
    squares.each(function(){
        $(this).css( "backgroundColor",randomRGB());
    });
}

//picks the color of the squares to be the one to be guessed
function pickRGB(squares, numOfSquares){
    return $(squares[randomNum(numOfSquares)]).css("backgroundColor");
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